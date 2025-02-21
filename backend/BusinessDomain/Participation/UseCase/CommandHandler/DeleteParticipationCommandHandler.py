from BusinessDomain.Participation.Repository import ParticipatesInRepository
from BusinessDomain.Participation.UseCase.CommandHandler.Command import (
    DeleteParticipationCommand,
)


class DeleteParticipationCommandHandler:

    @staticmethod
    def execute(command: DeleteParticipationCommand) -> None:

        ParticipatesInRepository.delete(command.tournamentId, command.teamId)
