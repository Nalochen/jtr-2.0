from dataclasses import dataclass


@dataclass
class CreateNewPasswordCommand:

    hash: str
    password: str
