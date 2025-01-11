from datetime import timedelta

from BusinessDomain.User.Model import LoginAttemptResponse
from BusinessDomain.User.Repository import LoginAttemptRepository
from BusinessDomain.User.Rule.IsUserLockedRule import IsUserLockedRule
from DataDomain.Database.Enum import LockType
from Infrastructure.Logger import logger


class CheckForFailedAttemptsRule:

    @staticmethod
    def applies(username: str) -> LoginAttemptResponse | bool:

        loginAttempt = LoginAttemptRepository.getByUsername(username)

        if not loginAttempt:
            return False

        isLocked, lockType = IsUserLockedRule.applies(loginAttempt.username)

        if not isLocked:
            return False

        if lockType == LockType.PERMANENTLY.value:
            logger.warning(f'CheckForFailedAttemptsRule | applies | User {
                username} is permanently locked.')
            return LoginAttemptResponse(
                lockType=lockType,
                lockedUntil=None
            )

        elif lockType == LockType.TEMPORARILY.value:
            logger.warning(f'CheckForFailedAttemptsRule | applies | User {
                username} is temporarily locked.')
            return LoginAttemptResponse(
                lockType=lockType,
                lockedUntil=str(
                    loginAttempt.last_attempt +
                    timedelta(minutes=15)
                )
            )

        return False
