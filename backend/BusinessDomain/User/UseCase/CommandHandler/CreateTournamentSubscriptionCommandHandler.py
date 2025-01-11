from BusinessDomain.User.Repository import TournamentSubscriptionRepository
from BusinessDomain.User.UseCase.CommandHandler.Command import (
    CreateTournamentSubscriptionCommand,
)


class CreateTournamentSubscriptionCommandHandler:

    @staticmethod
    def execute(command: CreateTournamentSubscriptionCommand) -> None:

        TournamentSubscriptionRepository.create(
            command.tournamentId, command.userId)
