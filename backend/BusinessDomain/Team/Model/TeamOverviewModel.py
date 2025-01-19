from dataclasses import dataclass


@dataclass
class TeamOverviewModelElement:

    id: int
    name: str
    escaped_name: str
    logo_url: str
    points: float
    city: str
    placement: str
