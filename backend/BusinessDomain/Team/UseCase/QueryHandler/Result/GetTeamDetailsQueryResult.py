from dataclasses import dataclass
from datetime import datetime
from typing import List

from BusinessDomain.Team.Model import (
    MembersModel,
    OrganizedTournamentsModel,
    PastTournamentsModel,
)


@dataclass
class GetTeamDetailsQueryResult:

    id: int
    aboutUs: str | None
    city: str | None
    contacts: List[str]
    escapedName: str
    founded: datetime
    isMixTeam: bool | None
    lastOrganizedTournament: datetime | None
    lastParticipatedTournament: datetime | None
    logo: str
    members: List[MembersModel]
    name: str
    organizedTournaments: List[OrganizedTournamentsModel]
    pastTournaments: List[PastTournamentsModel]
    points: float
    trainingTime: str | None
    trainingTimeUpdatedAt: datetime | None
