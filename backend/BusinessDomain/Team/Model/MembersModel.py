from dataclasses import dataclass


@dataclass
class MembersModel:

    id: int
    name: str
    picture_url: str
    role: str
