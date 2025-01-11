from dataclasses import dataclass
from datetime import datetime


@dataclass
class GetUserOverviewResult:

    id: int
    username: str
    name: str | None
    birthdate: datetime | None
    picture: str | None
    pronouns: str | None
    city: str | None
    email: str | None
