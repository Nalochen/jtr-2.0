from dataclasses import dataclass


@dataclass
class TournamentOverviewResult:

    id: int
    name: str
    organizerLogoUrl: str
    startDate: str
    endDate: str
    totalTeams: int
    registeredTeams: int
    location: str
