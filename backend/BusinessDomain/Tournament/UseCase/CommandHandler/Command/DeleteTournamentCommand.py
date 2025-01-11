from dataclasses import dataclass


@dataclass
class DeleteTournamentCommand:

    tournamentId: int
