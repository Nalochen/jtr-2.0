from dataclasses import dataclass


@dataclass
class UpdateMembershipCommand:

    userId: int
    teamId: int
    userRole: str
