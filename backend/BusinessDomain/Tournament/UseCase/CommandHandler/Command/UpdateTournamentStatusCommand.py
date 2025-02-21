from dataclasses import dataclass


@dataclass
class UpdateTournamentStatusCommand:

    tournamentId: int
    status: str
