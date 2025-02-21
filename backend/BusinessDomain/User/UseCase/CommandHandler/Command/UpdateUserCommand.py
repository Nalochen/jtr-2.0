from dataclasses import dataclass


@dataclass
class UpdateUserCommand:

    birthdate: str | None
    city: str | None
    email: str | None
    isBirthdateVisible: bool | None
    isCityVisible: bool | None
    isNameVisible: bool | None
    name: str | None
    password: str | None
    pronouns: str | None
    username: str | None
