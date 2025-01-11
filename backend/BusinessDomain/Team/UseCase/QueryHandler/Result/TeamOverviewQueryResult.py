from dataclasses import dataclass


@dataclass
class TeamOverviewQueryResult:

    id: int
    name: str
    escapedName: str
    logo: str
    points: float
    city: str
    placement: str
