from dataclasses import dataclass

from DataDomain.Database.Enum import LockType


@dataclass
class LoginAttemptResponse:

    lockType: LockType | None
    lockedUntil: str | None
