from datetime import datetime, timedelta

from BusinessDomain.User.Repository import LoginAttemptRepository
from DataDomain.Database.Enum import LockType


class IsUserLockedRule:

    @staticmethod
    def applies(username: str) -> tuple[bool, LockType | None]:

        loginAttempt = LoginAttemptRepository.getByUsername(username)

        lockTime = timedelta(minutes=15)

        if loginAttempt.attempts >= 8:
            return True, LockType.PERMANENTLY.value

        elif loginAttempt.attempts >= 6 and datetime.now() - loginAttempt.last_attempt < lockTime:
            return True, LockType.TEMPORARILY.value

        return False, None
