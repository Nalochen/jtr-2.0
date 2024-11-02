import json

from sqlalchemy import func

from DataDomain.Database.Model.RelationTournamentTeam import participates_in
from DataDomain.Database.Model.RelationUserTeam import is_part_of
from DataDomain.Database.Model.Teams import Teams
from DataDomain.Database.Model.Tournaments import Tournaments
from DataDomain.Database.Model.Users import Users
from DataDomain.Database.db import db


class TeamRepository:
    """Repository for team related queries."""

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
            participates_in.c.placement
        ).join(
            participates_in, participates_in.c.tournament_id == Tournaments.id
        ).filter(
            participates_in.c.team_id == teamId
        ).all()

        organizedTournaments = db.session.query(
            Tournaments.id,
            Tournaments.name
        ).filter(
            Tournaments.organizer_id == teamId
        ).all()

        return {
            'id': team.id,
            'aboutUs': team.about_us,
            'city': team.city,
            'contacts': json.loads(str(team.contacts)),
            'founded': team.founded.isoformat() if team.founded else None,
            'isMixTeam': team.is_mix_team,
            'lastOrganizedTournament': team.last_organized_tournament.isoformat() if team.last_organized_tournament else None,
            'lastParticipatedTournament': team.last_participated_tournament.isoformat() if team.last_participated_tournament else None,
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
