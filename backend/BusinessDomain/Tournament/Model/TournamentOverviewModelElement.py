from dataclasses import dataclass


@dataclass
class TournamentOverviewModelElement:

    id: int
    name: str
    logo: str
    start_date: str
    end_date: str
    possible_space: int
    registered_teams: int
    location: str
