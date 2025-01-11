from dataclasses import dataclass
from datetime import datetime


@dataclass
class TeamDetailsModel:

    id: int
    name: str
    escaped_name: str
    logo: str
    points: float
    city: str | None
    is_mix_team: bool | None
    created_at: datetime
    training_time: str | None
    training_time_updated_at: datetime | None
    contacts: str
    about_us: str | None
    last_participated_tournament: datetime | None
    last_organized_tournament: datetime | None
