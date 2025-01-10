from dataclasses import dataclass

from DataDomain.Database.Enum import LockType


@dataclass
class LoginAttemptResponse:
    """The response for the checkForFailedAttempts method"""

    lockType: LockType | None
    lockedUntil: str | None
