from BusinessDomain.Participation.Repository import ParticipatesInRepository
from BusinessDomain.Participation.Rule import (
    DoesParticipationExistsHardRule,
    GetNextFreeRegistrationOrderRule,
    IsParticipationDeletedRule,
)
from BusinessDomain.Participation.UseCase.CommandHandler.Command import (
    CreateParticipationCommand,
)
from BusinessDomain.Tournament.Rule import GetPossibleSpaceRule


class CreateParticipationCommandHandler:

    @staticmethod
    def execute(command: CreateParticipationCommand) -> None:

        registrationOrder = GetNextFreeRegistrationOrderRule.applies(
            command.tournamentId
        )

        isOnWaitingList = registrationOrder > GetPossibleSpaceRule.applies(
            command.tournamentId)

        if not DoesParticipationExistsHardRule.applies(
                command.tournamentId, command.teamId):

            ParticipatesInRepository.create(
                tournamentId=command.tournamentId,
                teamId=command.teamId,
                registrationOrder=registrationOrder,
                isOnWaitingList=isOnWaitingList
            )

            return

        if IsParticipationDeletedRule.applies(
                command.tournamentId, command.teamId):

            ParticipatesInRepository.recreate(
                tournamentId=command.tournamentId,
                teamId=command.teamId,
                registrationOrder=registrationOrder,
                isOnWaitingList=isOnWaitingList
            )
