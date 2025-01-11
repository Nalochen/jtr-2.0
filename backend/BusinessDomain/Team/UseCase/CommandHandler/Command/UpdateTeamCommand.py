from dataclasses import dataclass


@dataclass
class UpdateTeamCommand:

    aboutUs: str | None
    city: str | None
    contacts: str | None
    escapedName: str | None
    founded: str | None
    isMixTeam: bool | None
    logo: str | None
    name: str | None
    teamId: int
    trainingTime: str | None
