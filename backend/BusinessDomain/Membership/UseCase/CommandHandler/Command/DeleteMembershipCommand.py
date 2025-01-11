from dataclasses import dataclass


@dataclass
class DeleteMembershipCommand:

    userId: int
    teamId: int
