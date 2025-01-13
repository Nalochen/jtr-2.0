from dataclasses import dataclass
from datetime import date, datetime
from typing import List


@dataclass
class TeamResult:

    id: int
    logo: str
    name: str


@dataclass
class GetUserDetailsResult:

    id: int
    createdAt: datetime
    email: str
    isBirthdateVisible: bool
    isCityVisible: bool
    isDeleted: bool
    isNameVisible: bool
    picture: str
    pronouns: str
    teams: List[TeamResult]
    updatedAt: datetime
    username: str
    name: str | None = None
    birthdate: date | None = None
    city: str | None = None
