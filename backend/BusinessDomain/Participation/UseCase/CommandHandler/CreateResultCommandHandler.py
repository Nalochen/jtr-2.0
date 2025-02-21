from BusinessDomain.Participation.Repository import ParticipatesInRepository
from BusinessDomain.Participation.Rule import DoesParticipationExistsRule
from BusinessDomain.Participation.UseCase.CommandHandler.Command import (
    CreateResultCommand,
)
from BusinessDomain.Tournament.Repository.TournamentRepository import TournamentRepository
from DataDomain.Database.Enum import TournamentStatusTypesEnum


class CreateResultCommandHandler:

    @staticmethod
    def execute(command: CreateResultCommand) -> None:

        for resultElement in command.resultElements:
            if not DoesParticipationExistsRule.applies(
                    command.tournamentId, resultElement.teamId):
                continue

            ParticipatesInRepository.createResult(
                command.tournamentId, resultElement.teamId, resultElement.placement)

        if ParticipatesInRepository.allPlacementsSet(command.tournamentId):

            tournament = TournamentRepository.get(command.tournamentId)

            tournament.status = TournamentStatusTypesEnum.OVER.value

            TournamentRepository.update(tournament)
