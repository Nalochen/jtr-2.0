from dataclasses import dataclass


@dataclass
class PastTournamentOverviewResult:

    id: int
    name: str
    organizerLogo: str
    startDate: str
    endDate: str
    totalTeams: int
    registeredTeams: int
    location: str
