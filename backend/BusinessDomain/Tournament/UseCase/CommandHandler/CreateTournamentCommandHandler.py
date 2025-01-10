import json
from datetime import datetime

from BusinessDomain.Common.Rule.ParseToIsoRule import ParseIsoDateRule
from BusinessDomain.Tournament.Repository import TournamentRepository
from BusinessDomain.Tournament.UseCase.CommandHandler.Command import (
    CreateTournamentCommand,
)
from DataDomain.Database.Model import Tournaments
from Infrastructure.Logger import logger


class CreateTournamentCommandHandler:

    @staticmethod
    def execute(command: CreateTournamentCommand) -> int:

        try:
            tournament = Tournaments()

            tournament.additional_information = command.additionalInformation
            tournament.name = command.name
            tournament.start_date = datetime.fromisoformat(command.startDate)
            tournament.end_date = datetime.fromisoformat(command.endDate)
            tournament.start_arrival_date = ParseIsoDateRule.applies(
                command.startArrivalDate)
            tournament.end_arrival_date = ParseIsoDateRule.applies(command.endArrivalDate)
            tournament.address = command.address
            tournament.possible_space = command.possibleSpace
            tournament.registration_procedure_type = command.registrationProcedureType
            tournament.registration_procedure_text = command.registrationProcedureText
            tournament.registration_procedure_url = command.registrationProcedureUrl
            tournament.registration_start_date = ParseIsoDateRule.applies(
                command.registrationStartDate)
            tournament.registration_costs = command.registrationCosts
            tournament.registration_costs_type = command.registrationCostsType
            tournament.deposit_costs = command.depositCosts
            tournament.deposit_costs_type = command.depositCostsType
            tournament.accommodation_costs = command.accommodationCosts
            tournament.accommodation_costs_type = command.accommodationCostsType
            tournament.guest_costs = command.guestCosts
            tournament.guest_costs_type = command.guestCostsType
            tournament.costs_text = command.costsText
            tournament.deadlines = command.deadlines
            tournament.schedule = command.schedule

            tournament.contacts = json.dumps(command.contacts) if command.contacts else []

            tournament.accommodation_type = command.accommodationType
            tournament.accommodation_location = command.accommodationLocation
            tournament.location = command.location
            tournament.food_morning = command.foodMorning
            tournament.food_noon = command.foodNoon
            tournament.food_evening = command.foodEvening
            tournament.food_gastro = command.foodGastro
            tournament.tournament_system_text = command.tournamentSystemText
            tournament.tournament_system_url = command.tournamentSystemUrl
            tournament.pompf_check_text = command.pompfCheckText
            tournament.pompf_check_url = command.pompfCheckUrl
            tournament.house_rules_text = command.houseRulesText
            tournament.house_rules_url = command.houseRulesUrl
            tournament.studded_shoes_allowed = command.studdedShoesAllowed
            tournament.cleats_shoes_allowed = command.cleatsShoesAllowed
            tournament.cam_shoes_allowed = command.camShoesAllowed
            tournament.barefoot_allowed = command.barefootAllowed
            tournament.shoes_text = command.shoesText

            tournament.organizer_id = command.teamId

            tournamentId = TournamentRepository.create(tournament)

        except Exception as e:
            logger.error(f'CreateTournamentCommandHandler | execute | {e}')
            raise e

        return tournamentId
