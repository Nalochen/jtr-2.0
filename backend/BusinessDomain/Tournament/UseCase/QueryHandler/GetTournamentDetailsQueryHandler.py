import json

from BusinessDomain.Participation.Repository import ParticipatesInRepository
from BusinessDomain.Tournament.Repository import TournamentRepository
from BusinessDomain.Tournament.UseCase.QueryHandler.Query import GetTournamentDetailsQuery
from BusinessDomain.Tournament.UseCase.QueryHandler.Result.GetTournamentDetailsResult import (
    Accommodation,
    ArrivalDate,
    Costs,
    Food,
    GetTournamentDetailsResult,
    HouseRules,
    Organizer,
    PompfCheck,
    RegistrationProcedure,
    Shoes,
    TeamData,
    Teams,
    TournamentSystem,
)


class GetTournamentDetailsQueryHandler:

    @staticmethod
    def execute(query: GetTournamentDetailsQuery) -> GetTournamentDetailsResult | None:

        tournament = TournamentRepository.getFull(query.tournamentId)

        if not tournament:
            return None

        participatingTeams = []
        waitingTeams = []

        for team in tournament.teams:

            participation = ParticipatesInRepository.get(
                tournamentId=query.tournamentId,
                teamId=team.id
            )

            if not participation:
                continue

            teamData = TeamData(
                id=team.id,
                aboutUs=team.about_us,
                city=team.city,
                contacts=json.loads(team.contacts),
                createdAt=team.created_at,
                escapedName=team.escaped_name,
                founded=team.founded,
                hasPayed=participation.has_payed,
                isMixTeam=team.is_mix_team,
                logoUrl=team.logo_url,
                name=team.name,
                placement=participation.placement,
                registrationOrder=participation.registration_order,
                trainingTime=team.training_time,
                updatedAt=team.updated_at,
            )

            if participation.is_on_waiting_list:
                waitingTeams.append(teamData)
            else:
                participatingTeams.append(teamData)

        return GetTournamentDetailsResult(
            id=tournament.id,
            name=tournament.name,
            accommodation=Accommodation(
                location=tournament.accommodation_location,
                type=tournament.accommodation_type
            ),
            additionalInformation=tournament.additional_information,
            address=tournament.address,
            arrivalDate=ArrivalDate(
                start=tournament.start_arrival_date or None,
                end=tournament.end_arrival_date or None
            ),
            contacts=json.loads(tournament.contacts),
            costs=Costs(
                registrationCosts=tournament.registration_costs,
                registrationCostsType=tournament.registration_costs_type,
                depositCosts=tournament.deposit_costs,
                depositCostsType=tournament.deposit_costs_type,
                accommodationCosts=tournament.accommodation_costs,
                accommodationCostsType=tournament.accommodation_costs_type,
                guestCosts=tournament.guest_costs,
                guestCostsType=tournament.guest_costs_type,
                costsText=tournament.costs_text
            ),
            createdAt=tournament.created_at,
            date=ArrivalDate(
                start=tournament.start_date,
                end=tournament.end_date
            ),
            deadlines=tournament.deadlines,
            food=Food(
                morning=tournament.food_morning,
                noon=tournament.food_noon,
                evening=tournament.food_evening,
                gastro=tournament.food_gastro
            ),
            houseRules=HouseRules(
                text=tournament.house_rules_text,
                url=tournament.house_rules_url
            ),
            location=tournament.location,
            organizer=Organizer(
                id=tournament.organizer.id,
                name=tournament.organizer.name,
                aboutUs=tournament.organizer.about_us,
                city=tournament.organizer.city,
                contacts=json.loads(str(tournament.organizer.contacts)),
                createdAt=tournament.organizer.created_at,
                founded=tournament.organizer.founded,
                isMixTeam=tournament.organizer.is_mix_team,
                logoUrl=tournament.organizer.logo_url,
                trainingTime=tournament.organizer.training_time,
                updatedAt=tournament.organizer.updated_at
            ),
            pompfCheck=PompfCheck(
                text=tournament.pompf_check_text,
                url=tournament.pompf_check_url
            ),
            possibleSpace=tournament.possible_space,
            registrationStartDate=tournament.registration_start_date,
            registrationProcedure=RegistrationProcedure(
                text=tournament.registration_procedure_text,
                type=tournament.registration_procedure_type,
            ),
            schedule=tournament.schedule,
            shoes=Shoes(
                barefootAllowed=tournament.barefoot_allowed,
                camAllowed=tournament.cam_shoes_allowed,
                cleatsAllowed=tournament.cleats_shoes_allowed,
                studdedAllowed=tournament.studded_shoes_allowed,
                text=tournament.shoes_text
            ),
            status=tournament.status,
            teamCount=len(tournament.teams),
            teams=Teams(
                participating=participatingTeams,
                waiting=waitingTeams
            ),
            tournamentSystem=TournamentSystem(
                text=tournament.tournament_system_text,
                url=tournament.tournament_system_url
            ),
            updatedAt=tournament.updated_at
        )
