from datetime import datetime
from typing import List

from sqlalchemy import func, Integer, or_, and_
from sqlalchemy.orm import aliased

from DataDomain.Database.Model.RelationTournamentTeam import participates_in
from DataDomain.Database.Model.Teams import Teams
from DataDomain.Database.Model.Tournaments import Tournaments
from DataDomain.Database.db import db


class TournamentRepository:
    """Repository for tournament related queries."""

    @staticmethod
    def getTournamentOverview(
            currentTime: datetime = None) -> List[Tournaments]:
        """Get tournament overview."""

        if currentTime is None:
            currentTime = datetime.now()

        TeamParticipation = aliased(participates_in)

        return db.session.query(
            Tournaments.id,
            Tournaments.organizer_id,
            Tournaments.name,
            Tournaments.start_date,
            Tournaments.end_date,
            Teams.logo.label('logo'),
            func.count(TeamParticipation.c.team_id).label('total_teams'),
            func.sum((TeamParticipation.c.is_on_waiting_list ==
                      0).cast(Integer)).label('registered_teams')
        ).outerjoin(
            TeamParticipation, Tournaments.id == TeamParticipation.c.tournament_id
        ).join(
            Teams, Tournaments.organizer_id == Teams.id
        ).filter(
            or_(
                and_(
                    Tournaments.start_date <= currentTime,
                    Tournaments.end_date >= currentTime
                ),
                Tournaments.start_date > currentTime
            )
        ).group_by(
            Tournaments.id
        ).order_by(
            Tournaments.start_date
        ).all()
