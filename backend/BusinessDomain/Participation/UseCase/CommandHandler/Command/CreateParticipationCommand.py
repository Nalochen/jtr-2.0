from dataclasses import dataclass


@dataclass
class CreateParticipationCommand:

    teamId: int
    tournamentId: int
