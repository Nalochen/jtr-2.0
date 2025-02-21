from dataclasses import dataclass


@dataclass
class DeleteParticipationCommand:

    tournamentId: int
    teamId: int
