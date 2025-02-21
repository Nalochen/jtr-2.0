from dataclasses import dataclass


@dataclass
class UpdateTeamPictureCommand:

    picture: str
    teamId: int
