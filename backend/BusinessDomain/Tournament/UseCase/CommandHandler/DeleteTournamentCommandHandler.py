from BusinessDomain.Tournament.Repository import TournamentRepository
from BusinessDomain.Tournament.UseCase.CommandHandler.Command import (
    DeleteTournamentCommand,
)


class DeleteTournamentCommandHandler:

    @staticmethod
    def execute(command: DeleteTournamentCommand) -> None:

        TournamentRepository.delete(tournamentId=command.tournamentId)
