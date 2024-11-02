from datetime import datetime
from typing import List

from sqlalchemy import func, or_, and_
from sqlalchemy.orm import aliased, joinedload

from DataDomain.Database.Model.RelationTournamentTeam import participates_in
from DataDomain.Database.Model.Teams import Teams
from DataDomain.Database.Model.Tournaments import Tournaments
from DataDomain.Database.db import db
import json


class TournamentRepository:
    """Repository for tournament related queries."""

    @staticmethod
    def getTournamentOverview(
            currentTime: datetime = None) -> List[dict]:
        """Get tournament overview."""

        if currentTime is None:
            currentTime = datetime.now()

        TeamParticipation = aliased(participates_in)

        tournaments = db.session.query(
            Tournaments.id,
            Tournaments.organizer_id,
            Tournaments.name,
            Tournaments.start_date,
            Tournaments.end_date,
            Teams.logo.label('logo'),
            Tournaments.possible_space,
            func.count(
                TeamParticipation.c.team_id).label('registered_teams'),
            Tournaments.location).outerjoin(
            TeamParticipation,
            Tournaments.id == TeamParticipation.c.tournament_id).join(
                Teams,
                Tournaments.organizer_id == Teams.id).filter(
                    or_(
                        and_(
                            Tournaments.start_date <= currentTime,
                            Tournaments.end_date >= currentTime),
                        Tournaments.start_date > currentTime)).group_by(
            Tournaments.id).order_by(
            Tournaments.start_date).all()

        return [{
            'id': tournament.id,
            'name': tournament.name,
            'organizerLogo': tournament.logo,
            'startDate': tournament.start_date.isoformat(),
            'endDate': tournament.end_date.isoformat(),
            'totalTeams': tournament.possible_space,
            'registeredTeams': int(
                tournament.registered_teams) if tournament.registered_teams else 0,
            'location': tournament.location
        } for tournament in tournaments]

    @staticmethod
    def getTournamentDetails(tournamentId: int) -> dict | None:
        """Get tournament details by id."""

        tournament = db.session.query(Tournaments).options(
            joinedload(Tournaments.teams),
            joinedload(Tournaments.organizer)
        ).filter(Tournaments.id == tournamentId).first()

        if not tournament:
            return None

        participatesTeams = []
        waitingTeams = []

        for team in tournament.teams:
            participation = db.session.query(participates_in).filter(
                participates_in.c.team_id == team.id,
                participates_in.c.tournament_id == tournament.id
            ).first()

            teamData = {
                'id': team.id,
                'name': team.name,
                'aboutUs': team.about_us,
                'city': team.city,
                'contacts': json.loads(str(team.contacts)),
                'createdAt': team.created_at.isoformat(),
                'founded': team.founded.isoformat(),
                'isMixTeam': team.is_mix_team,
                'logo': team.logo,
                'trainingTime': team.training_time,
                'updatedAt': team.updated_at.isoformat()
            }
            if participation and participation.is_on_waiting_list:
                waitingTeams.append(teamData)
            else:
                participatesTeams.append(teamData)

        return {
            'id': tournament.id,
            'name': tournament.name,
            'accommodation': {
                'text': tournament.accommodation_text,
                'type': tournament.accommodation_type.value,
            },
            'additionalInformation': tournament.additional_information,
            'address': tournament.address,
            'arrivalTime': tournament.arrival_time,
            'contacts': json.loads(str(tournament.contacts)),
            'costs': {
                'team': tournament.costs_per_team,
                'user': tournament.costs_per_user
            },
            'createdAt': tournament.created_at.isoformat(),
            'date': {
                'start': tournament.start_date.isoformat(),
                'end': tournament.end_date.isoformat()
            },
            'deadlines': json.loads(str(tournament.deadlines)),
            'food': {
                'morning': tournament.food_morning.value,
                'noon': tournament.food_noon.value,
                'evening': tournament.food_evening.value,
                'gastro': tournament.food_gastro.value
            },
            'houseRules': {
                'text': tournament.house_rules_text,
                'url': tournament.house_rules_url
            },
            'location': tournament.location,
            'organizer': {
                'id': tournament.organizer.id,
                'name': tournament.organizer.name,
                'aboutUs': tournament.organizer.about_us,
                'city': tournament.organizer.city,
                'contacts': json.loads(str(tournament.organizer.contacts)),
                'createdAt': tournament.organizer.created_at.isoformat(),
                'founded': tournament.organizer.founded.isoformat(),
                'isMixTeam': tournament.organizer.is_mix_team,
                'logo': tournament.organizer.logo,
                'trainingTime': tournament.organizer.training_time,
                'updatedAt': tournament.organizer.updated_at.isoformat()
            },
            'pompfCheck': {
                'text': tournament.pompf_check_text,
                'url': tournament.pompf_check_url
            },
            'possibleSpace': tournament.possible_space,
            'registrationOpenAt': tournament.registration_open_at.isoformat(),
            'registrationProcedure': {
                'text': tournament.registration_procedure_text,
                'type': tournament.registration_procedure_type.value,
                'url': tournament.registration_procedure_url
            },
            'schedule': tournament.schedule,
            'shoes': {
                'barefootAllowed': tournament.barefoot_allowed,
                'camAllowed': tournament.cam_shoes_allowed,
                'cleatsAllowed': tournament.cleats_shoes_allowed,
                'studdedAllowed': tournament.studded_shoes_allowed,
                'text': tournament.shoes_text,
                'url': tournament.shoes_url
            },
            'status': tournament.status.value,
            'teamCount': len(tournament.teams),
            'teams': {
                'participating': participatesTeams,
                'waiting': waitingTeams
            },
            'tournamentSystem': {
                'text': tournament.tournament_system_text,
                'type': tournament.tournament_system_type.value,
                'url': tournament.tournament_system_url
            },
            'updatedAt': tournament.updated_at.isoformat()
        }
