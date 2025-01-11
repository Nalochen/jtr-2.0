from dataclasses import dataclass


@dataclass
class DeleteUserCommand:

    userId: int
