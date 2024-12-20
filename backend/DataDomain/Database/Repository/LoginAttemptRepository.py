from dataclasses import dataclass
from datetime import timedelta

from DataDomain.Database.Enum.LockType import LockType
from DataDomain.Database.Model.LoginAttempts import LoginAttempts
from DataDomain.Database.db import db
from Infrastructure.Logger.Logger import logger


@dataclass
class LoginAttemptResponse:
    """The response for the checkForFailedAttempts method"""

    lockType: LockType | None
    lockedUntil: str | None


class LoginAttemptRepository:
    """Repository for LoginAttempt related queries"""

    @staticmethod
    def isLocked(username: str) -> bool:
        """Check if a LoginAttempt entry is locked"""

        loginAttempt = LoginAttempts.query.filter_by(username=username).first()

        if loginAttempt:
            isLocked, _ = loginAttempt.isLocked()

            return isLocked

        return False

    @staticmethod
    def exists(username: str) -> bool:
        """Check if a LoginAttempt entry exists"""

        return LoginAttempts.query.filter_by(
            username=username).first() is not None

    def createOrIncreaseAttempts(self, username: str) -> None:
        """Create a new LoginAttempt entry or increase the attempts"""

        loginAttempt = self.exists(username)

        if not loginAttempt:
            self.create(username)

        else:
            currentAttempts = self.increaseFailedAttempts(username)
            if currentAttempts >= 8:
                # Send email
                pass

    @staticmethod
    def increaseFailedAttempts(username: str) -> int:
        """Increase the failed attempts of a LoginAttempt entry"""

        try:
            loginAttempt: LoginAttempts = LoginAttempts.query.filter_by(
                username=username).first()

            loginAttempt.attempts += 1

            db.session.commit()

            return loginAttempt.attempts

        except Exception as e:
            db.session.rollback()
            logger.error(
                f'LoginAttemptRepository | increaseFailedAttempts | {e}')
            raise e

    @staticmethod
    def create(username: str) -> LoginAttempts:
        """Create a new LoginAttempt entry"""

        try:
            loginAttempt = LoginAttempts()

            loginAttempt.username = username

            db.session.add(loginAttempt)
            db.session.commit()

            logger.info(
                f'LoginAttemptRepository | create | Created new failed login attempt for user {username}')

            return loginAttempt

        except Exception as e:
            db.session.rollback()
            logger.error(f'LoginAttemptRepository | create | {e}')
            raise e

    @staticmethod
    def checkForFailedAttempts(username: str) -> LoginAttemptResponse | bool:
        """Check for failed login attempts"""

        try:
            loginAttempt = LoginAttempts.query.filter_by(
                username=username).first()

            if not loginAttempt:
                return False

            isLocked, lockType = loginAttempt.isLocked()

            if not isLocked:
                return False

            if lockType == LockType.PERMANENTLY.value:
                logger.warning(f'LoginAttemptRepository | checkForFailedAttempts | User {
                    username} is permanently locked.')
                return LoginAttemptResponse(
                    lockType=lockType,
                    lockedUntil=None
                )

            elif lockType == LockType.TEMPORARILY.value:
                logger.warning(f'LoginAttemptRepository | checkForFailedAttempts | User {
                    username} is temporarily locked.')
                return LoginAttemptResponse(
                    lockType=lockType,
                    lockedUntil=str(
                        loginAttempt.last_attempt +
                        timedelta(minutes=15)
                    )
                )

        except Exception as e:
            logger.error(
                f'LoginAttemptRepository | checkForFailedAttempts | {e}')
            raise e
