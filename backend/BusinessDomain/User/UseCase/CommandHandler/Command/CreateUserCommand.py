from dataclasses import dataclass


@dataclass
class CreateUserCommand:

    birthdate: str | None
    city: str | None
    email: str
    isBirthdateVisible: bool
    isCityVisible: bool
    isNameVisible: bool
    language: str
    name: str | None
    password: str
    username: str
