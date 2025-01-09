from dataclasses import dataclass
from datetime import datetime
from typing import List, Optional

from BusinessDomain.Team.Model import (
    MembersModel,
    OrganizedTournamentsModel,
    PastTournamentsModel,
)


@dataclass
class GetTeamDetailsQueryResult:

    id: int
    aboutUs: Optional[str]
    city: Optional[str]
    contacts: List[str]
    escapedName: str
    founded: datetime
    isMixTeam: Optional[bool]
    lastOrganizedTournament: Optional[datetime]
    lastParticipatedTournament: Optional[datetime]
    logo: str
    members: List[MembersModel]
    name: str
    organizedTournaments: List[OrganizedTournamentsModel]
    pastTournaments: List[PastTournamentsModel]
    points: float
    trainingTime: Optional[str]
    trainingTimeUpdatedAt: Optional[datetime]
