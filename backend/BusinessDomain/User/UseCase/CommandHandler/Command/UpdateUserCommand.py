from dataclasses import dataclass


@dataclass
class UpdateUserCommand:

    username: str | None
    password: str | None
    birthdate: str | None
    city: str | None
    email: str | None
    name: str | None
    pronouns: str | None
