import json
from datetime import datetime

from flask import g

from DataDomain.Database.Model.Tournaments import Tournaments
from DataDomain.Database.Repository.TournamentRepository import TournamentRepository
from DataDomain.Model.Response import Response
from ExternalApi.CustomerFrontend.Service.CheckForMembershipRoleService import CheckForMembershipRoleService


class CreateTournamentHandler:
    """Handler for creating a tournament"""

    @staticmethod
    def handle() -> Response:
        """Create tournament"""

        data = g.validatedData

        teamId: int = data.get('teamId') if data.get('teamId') else 1

        if not CheckForMembershipRoleService.isCurrentUserAdminOfTeam(teamId):
            return Response(status=403)

        tournament = Tournaments()

        tournament.additional_information = data.get('additionalInformation')
        tournament.name = data.get('name')
        tournament.start_date = datetime.fromisoformat(data.get('startDate'))
        tournament.end_date = datetime.fromisoformat(data.get('endDate'))
        tournament.start_arrival_date = datetime.fromisoformat(
            data.get('startArrivalDate')) if data.get('startArrivalDate') else None
        tournament.end_arrival_date = datetime.fromisoformat(
            data.get('endArrivalDate')) if data.get('endArrivalDate') else None
        tournament.address = data.get('address')
        tournament.possible_space = data.get('possibleSpace')
        tournament.registration_procedure_type = data.get(
            'registrationProcedureType')
        tournament.registration_procedure_text = data.get(
            'registrationProcedureText')
        tournament.registration_procedure_url = data.get(
            'registrationProcedureUrl')
        tournament.registration_start_date = datetime.fromisoformat(
            data.get('registrationStartDate')) if data.get('registrationStartDate') else None
        tournament.registration_costs = data.get('registrationCosts')
        tournament.registration_costs_type = data.get('registrationCostsType')
        tournament.deposit_costs = data.get('depositCosts')
        tournament.deposit_costs_type = data.get('depositCostsType')
        tournament.accommodation_costs = data.get('accommodationCosts')
        tournament.accommodation_costs_type = data.get(
            'accommodationCostsType')
        tournament.guest_costs = data.get('guestCosts')
        tournament.guest_costs_type = data.get('guestCostsType')
        tournament.costs_text = data.get('costsText')
        tournament.deadlines = data.get('deadlines')
        tournament.schedule = data.get('schedule')

        tournament.contacts = json.dumps(
            data.get('contacts')) if data.get('contacts') else []

        tournament.accommodation_type = data.get('accommodationType')
        tournament.accommodation_location = data.get('accommodationLocation')
        tournament.location = data.get('location')
        tournament.food_morning = data.get('foodMorning')
        tournament.food_noon = data.get('foodNoon')
        tournament.food_evening = data.get('foodEvening')
        tournament.food_gastro = data.get('foodGastro')
        tournament.tournament_system_text = data.get('tournamentSystemText')
        tournament.tournament_system_type = data.get('tournamentSystemType')
        tournament.tournament_system_url = data.get('tournamentSystemUrl')
        tournament.pompf_check_text = data.get('pompfCheckText')
        tournament.pompf_check_url = data.get('pompfCheckUrl')
        tournament.house_rules_text = data.get('houseRulesText')
        tournament.house_rules_url = data.get('houseRulesUrl')
        tournament.studded_shoes_allowed = data.get('studdedShoesAllowed')
        tournament.cleats_shoes_allowed = data.get('cleatsShoesAllowed')
        tournament.cam_shoes_allowed = data.get('camShoesAllowed')
        tournament.barefoot_allowed = data.get('barefootAllowed')
        tournament.shoes_text = data.get('shoesText')
        tournament.shoes_url = data.get('shoesUrl')

        tournament.organizer_id = teamId

        try:
            tournamentId = TournamentRepository.create(tournament)

        except Exception as e:
            return Response(response=e, status=500)

        return Response(
            response=tournamentId,
            status=200
        )
