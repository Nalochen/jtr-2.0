from BusinessDomain.Tournament.Repository import TournamentRepository
from BusinessDomain.Tournament.UseCase.CommandHandler.Command import (
    UpdateTournamentStatusCommand,
)


class UpdateTournamentStatusCommandHandler:

    @staticmethod
    def execute(command: UpdateTournamentStatusCommand) -> None:

        tournament = TournamentRepository.get(command.tournamentId)

        tournament.status = command.status

        TournamentRepository.update(tournament)
