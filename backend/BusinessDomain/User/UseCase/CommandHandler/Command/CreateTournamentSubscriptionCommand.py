from dataclasses import dataclass


@dataclass
class CreateTournamentSubscriptionCommand:

    tournamentId: int
    userId: int
