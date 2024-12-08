from datetime import datetime, timedelta

from sqlalchemy import Integer, Column, String, DateTime, func

from DataDomain.Database.Enum.LockType import LockType
from DataDomain.Database.Model.BaseModel import BaseModel
from DataDomain.Database.db import db


class LoginAttempts(BaseModel, db.Model):

    __tablename__ = 'login_attempts'

    id: Column[Integer] = db.Column(
        db.Integer,
        primary_key=True
    )

    username: Column[String] = db.Column(
        db.String(100),
        nullable=False
    )

    attempts: Column[Integer] = db.Column(
        db.Integer,
        server_default='1',
        nullable=False
    )

    last_attempt: Column[DateTime] = db.Column(
        db.DateTime,
        nullable=False,
        server_default=func.now(),
        onupdate=func.now()
    )

    def isLocked(self) -> tuple[bool, LockType | None]:
        """Check if the user is locked"""

        lockTime = timedelta(minutes=15)

        if self.attempts >= 8:
            return True, LockType.PERMANENTLY.value

        elif self.attempts >= 6 and datetime.now() - self.last_attempt < lockTime:
            return True, LockType.TEMPORARILY.value

        return False, None
