from dataclasses import dataclass


@dataclass
class CreateTournamentNotificationCommand:

    tournamentId: int
    message: str
