from dataclasses import dataclass


@dataclass
class DeleteTournamentSubscriptionCommand:

    userId: int
    tournamentId: int
