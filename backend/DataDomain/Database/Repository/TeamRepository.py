import json
from typing import List

from sqlalchemy import func
from sqlalchemy.orm import aliased

from DataDomain.Database.Model.RelationTournamentTeam import participates_in
from DataDomain.Database.Model.RelationUserTeam import is_part_of
from DataDomain.Database.Model.Teams import Teams
from DataDomain.Database.Model.Tournaments import Tournaments
from DataDomain.Database.Model.Users import Users
from DataDomain.Database.db import db


class TeamRepository:
    """Repository for team related queries."""

    @staticmethod
    def getTeamOverview() -> List[dict]:
        team_alias = aliased(Teams)
        subquery = db.session.query(
            team_alias.id,
            team_alias.points,
            func.rank().over(order_by=team_alias.points.desc()).label('rank')
        ).subquery()

        team = db.session.query(
            Teams.id,
            Teams.name,
            Teams.logo,
            Teams.points,
            Teams.city,
            subquery.c.rank.label('placement')
        ).join(
            subquery, Teams.id == subquery.c.id
        ).order_by(
            Teams.points.desc()
        ).all()

        return [{
            'id': team.id,
            'name': team.name,
            'logo': team.logo,
            'points': team.points,
            'city': team.city,
            'placement': team.placement
        } for team in team]

    @staticmethod
    def getTeamDetails(teamId: int) -> dict | None:
        """Get team details by id."""

        team = db.session.query(
            Teams.id,
            Teams.name,
            Teams.logo,
            Teams.points,
            Teams.city,
            Teams.is_mix_team,
            Teams.founded,
            Teams.training_time,
            Teams.training_time_updated_at,
            Teams.contacts,
            Teams.about_us,
            func.max(participates_in.c.created_at).label(
                'last_participated_tournament'),
            func.max(Tournaments.created_at).label('last_organized_tournament')
        ).outerjoin(
            participates_in, participates_in.c.team_id == Teams.id
        ).outerjoin(
            Tournaments, Tournaments.organizer_id == Teams.id
        ).filter(
            Teams.id == teamId
        ).group_by(
            Teams.id
        ).first()

        if not team:
            return None

        members = db.session.query(
            Users.id,
            Users.name,
            is_part_of.c.user_role.label('role')
        ).join(
            is_part_of, is_part_of.c.user_id == Users.id
        ).filter(
            is_part_of.c.team_id == teamId
        ).all()

        pastTournaments = db.session.query(
            Tournaments.id,
            Tournaments.name,
            Tournaments.end_date,
            participates_in.c.placement
        ).join(
            participates_in, participates_in.c.tournament_id == Tournaments.id
        ).filter(
            participates_in.c.team_id == teamId
        ).order_by(
            Tournaments.created_at.desc()
        ).all()

        organizedTournaments = db.session.query(
            Tournaments.id,
            Tournaments.name,
            Tournaments.end_date
        ).filter(
            Tournaments.organizer_id == teamId
        ).order_by(
            Tournaments.created_at.desc()
        ).all()

        return {
            'id': team.id,
            'aboutUs': team.about_us,
            'city': team.city,
            'contacts': json.loads(str(team.contacts)),
            'founded': team.founded.isoformat() if team.founded else None,
            'isMixTeam': team.is_mix_team,
            'lastOrganizedTournament': organizedTournaments[0].end_date.isoformat() if organizedTournaments else None,
            'lastParticipatedTournament': pastTournaments[0].end_date.isoformat() if pastTournaments else None,
            'logo': team.logo,
            'members': [{
                'id': member.id,
                'name': member.name,
                'role': member.role.value
            } for member in members],
            'name': team.name,
            'organizedTournaments': [{
                'id': tournament.id,
                'name': tournament.name
            } for tournament in organizedTournaments],
            'pastTournaments': [{
                'id': tournament.id,
                'name': tournament.name,
                'placement': tournament.placement
            } for tournament in pastTournaments],
            'points': team.points,
            'trainingTime': team.training_time,
            'trainingTimeUpdatedAt': team.training_time_updated_at.isoformat() if team.training_time_updated_at else None,
        }
