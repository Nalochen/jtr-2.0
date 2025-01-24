from BusinessDomain.User.Repository import TournamentSubscriptionRepository
from BusinessDomain.User.UseCase.CommandHandler.Command import (
    CreateTournamentSubscriptionCommand,
)


class CreateTournamentSubscriptionCommandHandler:

    @staticmethod
    def execute(command: CreateTournamentSubscriptionCommand) -> None:

        TournamentSubscriptionRepository.create(
            userId=command.userId,
            tournamentId=command.tournamentId
        )
