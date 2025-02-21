from BusinessDomain.User.Repository import TournamentSubscriptionRepository
from BusinessDomain.User.UseCase.CommandHandler.Command import (
    DeleteTournamentSubscriptionCommand,
)


class DeleteTournamentSubscriptionCommandHandler:

    @staticmethod
    def execute(command: DeleteTournamentSubscriptionCommand) -> None:

        TournamentSubscriptionRepository.delete(
            userId=command.userId,
            tournamentId=command.tournamentId
        )
