from dataclasses import dataclass


@dataclass
class IsUserAdminOfTeamQuery:

    escapedName: str
