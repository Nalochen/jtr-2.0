from dataclasses import dataclass
from datetime import date


@dataclass
class GetUserOverviewResult:

    id: int
    username: str
    name: str | None
    birthdate: date | None
    pictureUrl: str | None
    pronouns: str | None
    city: str | None
    email: str | None
