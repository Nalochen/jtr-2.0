from dataclasses import dataclass

from DataDomain.Database.Enum import LockType, UserLanguageTypesEnum


@dataclass
class LoginUserResult:

    token: str | None = None
    language: UserLanguageTypesEnum | None = None
    lockType: LockType | None = None
    lockedUntil: str | None = None
