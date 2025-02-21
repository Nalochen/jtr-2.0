from dataclasses import dataclass


@dataclass
class TeamOverviewQueryResult:

    id: int
    name: str
    escapedName: str
    logoUrl: str
    points: float
    city: str
    placement: str
