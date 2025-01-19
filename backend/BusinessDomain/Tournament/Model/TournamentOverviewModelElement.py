from dataclasses import dataclass


@dataclass
class TournamentOverviewModelElement:

    id: int
    name: str
    logo_url: str
    start_date: str
    end_date: str
    possible_space: int
    registered_teams: int
    location: str
