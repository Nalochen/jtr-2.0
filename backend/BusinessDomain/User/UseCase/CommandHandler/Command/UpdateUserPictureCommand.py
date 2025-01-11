from dataclasses import dataclass


@dataclass
class UpdateUserPictureCommand:

    pictureData: str
