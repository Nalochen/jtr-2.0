from dataclasses import dataclass


@dataclass
class CreateMembershipCommand:

    userId: int
    hash: str
