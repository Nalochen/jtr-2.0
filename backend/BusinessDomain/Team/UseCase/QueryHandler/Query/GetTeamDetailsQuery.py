from dataclasses import dataclass


@dataclass
class GetTeamDetailsQuery:

    escapedName: str
