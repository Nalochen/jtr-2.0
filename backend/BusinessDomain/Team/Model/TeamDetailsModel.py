from dataclasses import dataclass
from datetime import datetime
from typing import Optional


@dataclass
class TeamDetailsModel:

    id: int
    name: str
    escaped_name: str
    logo: str
    points: float
    city: Optional[str]
    is_mix_team: Optional[bool]
    founded: datetime
    training_time: Optional[str]
    training_time_updated_at: Optional[datetime]
    contacts: str
    about_us: Optional[str]
    last_participated_tournament: Optional[datetime]
    last_organized_tournament: Optional[datetime]
