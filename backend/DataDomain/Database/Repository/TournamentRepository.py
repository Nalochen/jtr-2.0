from datetime import datetime
from typing import List

from sqlalchemy import func, or_, and_
from sqlalchemy.orm import aliased, joinedload

from DataDomain.Database.Model.ParticipatesIn import participates_in
from DataDomain.Database.Model.Teams import Teams
from DataDomain.Database.Model.Tournaments import Tournaments
from DataDomain.Database.db import db
import json

from DataDomain.Database.tools import getJwtIdentity
from Infrastructure.Logger.Logger import logger


class TournamentRepository:
    """Repository for tournament related queries"""

    @staticmethod
    def getTournamentOverview(
            currentTime: datetime = None) -> List[dict]:
        """Get tournament overview"""

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
                    and_(or_(
                        and_(
                            Tournaments.start_date <= currentTime,
                            Tournaments.end_date >= currentTime),
                        Tournaments.start_date > currentTime), Tournaments.is_deleted == False)).group_by(
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
        """Get tournament details by id"""

        tournament = db.session.query(Tournaments).options(
            joinedload(Tournaments.teams),
            joinedload(Tournaments.organizer)
        ).filter(Tournaments.id == tournamentId).first()

        if not tournament:
            return None

        participatingTeams = []
        waitingTeams = []

        for team in tournament.teams:
            participation = db.session.query(participates_in).filter(
                participates_in.c.team_id == team.id,
                participates_in.c.tournament_id == tournament.id,
                participates_in.c.is_deleted == False
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
                'updatedAt': team.updated_at.isoformat(),
                'hasPayed': participation.has_payed,
                'placement': participation.placement,
                'registrationOrder': participation.registration_order,
            }
            if participation.is_on_waiting_list:
                waitingTeams.append(teamData)
            else:
                participatingTeams.append(teamData)

        return {
            'id': tournament.id,
            'name': tournament.name,
            'accommodation': {
                'location': tournament.accommodation_location,
                'type': tournament.accommodation_type.value,
            },
            'additionalInformation': tournament.additional_information,
            'address': tournament.address,
            'arrivalDate': {
                'start': tournament.start_arrival_date.isoformat(),
                'end': tournament.end_arrival_date.isoformat(),
            },
            'contacts': json.loads(str(tournament.contacts)),
            'costs': {
                'registrationCosts': tournament.registration_costs,
                'registrationCostsType': tournament.registration_costs_type.value if tournament.registration_costs_type else None,
                'depositCosts': tournament.registration_costs,
                'depositCostsType': tournament.registration_costs_type.value if tournament.registration_costs_type else None,
                'accommodationCosts': tournament.registration_costs,
                'accommodationCostsType': tournament.registration_costs_type.value if tournament.registration_costs_type else None,
                'guestCosts': tournament.registration_costs,
                'guestCostsType': tournament.registration_costs_type.value if tournament.registration_costs_type else None,
                'costsText': tournament.costs_text,
            },
            'createdAt': tournament.created_at.isoformat(),
            'date': {
                'start': tournament.start_date.isoformat(),
                'end': tournament.end_date.isoformat()
            },
            'deadlines': tournament.deadlines,
            'food': {
                'morning': tournament.food_morning.value,
                'noon': tournament.food_noon.value,
                'evening': tournament.food_evening.value,
                'gastro': tournament.food_gastro.value,
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
            'registrationStartDate': tournament.registration_start_date.isoformat(),
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
                'participating': participatingTeams,
                'waiting': waitingTeams
            },
            'tournamentSystem': {
                'text': tournament.tournament_system_text,
                'type': tournament.tournament_system_type.value,
                'url': tournament.tournament_system_url
            },
            'updatedAt': tournament.updated_at.isoformat()
        }

    @staticmethod
    def get(tournamentId: int) -> Tournaments:
        """Get tournament by id"""

        return db.session.query(
            Tournaments
        ).filter(
            Tournaments.id == tournamentId
        ).first()

    @staticmethod
    def create(tournament: Tournaments) -> int:
        try:
            db.session.add(tournament)
            db.session.commit()

            user = getJwtIdentity()

            logger.info(
                f'TournamentRepository | Create | User {
                    user.id} created tournament {
                    tournament.id}')

            return tournament.id

        except Exception as e:
            db.session.rollback()
            logger.error(f'TournamentRepository | Create | {e}')
            raise e

    @staticmethod
    def update(tournament: Tournaments) -> None:
        """Update tournament entry"""

        try:
            db.session.commit()

            user = getJwtIdentity()

            logger.info(
                f'TournamentRepository | Update | User {
                    user.id} updated tournament {
                    tournament.id}')

        except Exception as e:
            db.session.rollback()
            logger.error(f'TournamentRepository | Update | {e}')
            raise e

    @staticmethod
    def delete(tournamentId: int) -> None:
        """Set is_deleted on tournament entry to True"""

        try:
            db.session.query(
                participates_in
            ).filter(
                participates_in.c.tournament_id == tournamentId
            ).update({
                'is_deleted': True
            }, synchronize_session=False)

            db.session.query(
                Tournaments
            ).filter(
                Tournaments.id == tournamentId
            ).update({
                'is_deleted': True
            })
            db.session.commit()

            user = getJwtIdentity()

            logger.info(
                f'TournamentRepository | Delete | User {
                    user.id} deleted tournament {tournamentId}')

        except Exception as e:
            db.session.rollback()
            logger.error(f'TournamentRepository | Delete | {e}')
            raise e

    @staticmethod
    def getOrganizingTeam(tournamentId: int) -> Teams:
        """Get organizing team of tournament"""

        return db.session.query(
            Teams
        ).join(
            Tournaments,
            Tournaments.organizer_id == Teams.id
        ).filter(
            Tournaments.id == tournamentId
        ).first()
