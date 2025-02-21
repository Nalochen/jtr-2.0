from dataclasses import dataclass


@dataclass
class MembersResult:

    id: int
    name: str
    pictureUrl: str
    role: str
