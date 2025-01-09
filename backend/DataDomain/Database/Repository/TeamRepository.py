import json
from datetime import datetime
from typing import List

from sqlalchemy import func
from sqlalchemy.orm import aliased

from DataDomain.Database.db import db
from DataDomain.Database.Enum.UserRoleTypesEnum import UserRoleTypesEnum
from DataDomain.Database.Model.IsPartOf import is_part_of
from DataDomain.Database.Model.ParticipatesIn import participates_in
from DataDomain.Database.Model.Teams import Teams
from DataDomain.Database.Model.Tournaments import Tournaments
from DataDomain.Database.Model.Users import Users
from Infrastructure.Logger.Logger import logger


class TeamRepository:
    """Repository for team related queries"""

    @staticmethod
    def getTeamOverview() -> List[dict]:
        """Get team overview"""

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
        ).filter(
            Teams.is_deleted == False
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
        """Get team details by id"""

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
            Teams.id == teamId,
            Teams.is_deleted == False
        ).group_by(
            Teams.id
        ).first()

        if not team:
            return None

        members = db.session.query(
            Users.id,
            Users.name,
            is_part_of.c.user_role.label('role'),
            Users.picture
        ).join(
            is_part_of, is_part_of.c.user_id == Users.id
        ).filter(
            is_part_of.c.team_id == teamId,
            is_part_of.c.is_deleted == False
        ).all()

        pastTournaments = db.session.query(
            Tournaments.id,
            Tournaments.name,
            Tournaments.end_date,
            participates_in.c.placement
        ).join(
            participates_in, participates_in.c.tournament_id == Tournaments.id
        ).filter(
            participates_in.c.team_id == teamId,
            participates_in.c.is_deleted == False
        ).order_by(
            Tournaments.created_at.desc()
        ).all()

        organizedTournaments = db.session.query(
            Tournaments.id,
            Tournaments.name,
            Tournaments.end_date
        ).filter(
            Tournaments.organizer_id == teamId,
            Tournaments.is_deleted == False
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
                'role': member.role.value,
                'picture': member.picture
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

    @staticmethod
    def teamsOfUser(userId: int) -> List[Teams]:
        """Get all teams of a user"""

        return db.session.query(
            Teams
        ).join(
            is_part_of, is_part_of.c.team_id == Teams.id
        ).filter(
            is_part_of.c.user_id == userId,
            is_part_of.c.is_deleted == False
        ).all()

    @staticmethod
    def teamsOfAdmin(userId: int) -> List[Teams]:
        """Get all teams where the user is an admin"""

        return db.session.query(
            Teams
        ).join(
            is_part_of, is_part_of.c.team_id == Teams.id
        ).filter(
            is_part_of.c.user_id == userId,
            is_part_of.c.is_deleted == False,
            is_part_of.c.user_role.in_(
                [UserRoleTypesEnum.ADMIN.value, UserRoleTypesEnum.MODERATOR.value])
        ).all()

    @staticmethod
    def get(teamId: int) -> Teams | None:
        """Get team by id"""

        return Teams.query.get(teamId)

    @staticmethod
    def create(
            name: str,
            city: str | None,
            isMixTeam: bool | None,
            trainingTime: str | None,
            aboutUs: str | None,
            contacts: List[str] | None) -> int:
        """Create a new team entry"""

        try:
            team = Teams()

            team.name = name
            team.city = city
            team.is_mix_team = isMixTeam
            team.training_time = trainingTime
            team.about_us = aboutUs

            if contacts is not None:
                team.contacts = json.dumps(contacts)

            if trainingTime is not None:
                team.training_time_updated_at = datetime.now()

            db.session.add(team)
            db.session.commit()

            return team.id

        except Exception as e:
            db.session.rollback()
            logger.error(f'TeamRepository | create |  {e}')
            raise e

    @staticmethod
    def update() -> None:
        """Update team entry"""

        try:
            db.session.commit()

        except Exception as e:
            db.session.rollback()
            logger.error(f'TeamRepository | update | {e}')
            raise e

    @staticmethod
    def delete(teamId: int) -> None:
        """Set is_deleted on team entry to True"""

        try:
            db.session.query(
                participates_in
            ).filter(
                participates_in.c.team_id == teamId,
                participates_in.c.tournament_id.in_(
                    db.session.query(Tournaments.id).filter(
                        Tournaments.start_date > func.now())
                )
            ).update({
                'is_deleted': True
            }, synchronize_session=False)

            db.session.query(
                is_part_of
            ).filter(
                is_part_of.c.team_id == teamId
            ).update({
                'is_deleted': True
            }, synchronize_session=False)

            db.session.query(
                Tournaments
            ).filter(
                Tournaments.organizer_id == teamId,
            ).update({
                'is_deleted': True
            }, synchronize_session=False)

            db.session.query(
                Teams
            ).filter(
                Teams.id == teamId
            ).update({
                'is_deleted': True
            })
            db.session.commit()

        except Exception as e:
            db.session.rollback()
            logger.error(f'TeamRepository | delete | {e}')
            raise e
