from dataclasses import dataclass
from typing import List


@dataclass
class CreateTeamCommand:

    aboutUs: str | None
    city: str | None
    contacts: List[str] | None
    escapedName: str
    isMixTeam: bool | None
    name: str
    trainingTime: str | None
