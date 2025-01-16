from dataclasses import dataclass
from datetime import datetime
from typing import List

from BusinessDomain.Team.Model import OrganizedTournamentsModel, PastTournamentsModel


@dataclass
class MembersResult:

    id: int
    name: str
    pictureUrl: str
    role: str


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
    logoUrl: str
    members: List[MembersResult]
    name: str
    organizedTournaments: List[OrganizedTournamentsModel]
    pastTournaments: List[PastTournamentsModel]
    points: float
    trainingTime: str | None
    trainingTimeUpdatedAt: datetime | None
