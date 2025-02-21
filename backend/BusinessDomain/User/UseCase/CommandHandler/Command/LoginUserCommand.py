from dataclasses import dataclass


@dataclass
class LoginUserCommand:

    username: str
    email: str
    password: str
