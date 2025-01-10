from datetime import datetime

from sqlalchemy import func

from DataDomain.Database import db
from DataDomain.Database.Model import BaseModel


class LoginAttempts(BaseModel, db.Model):

    __tablename__ = 'login_attempts'

    id: int = db.Column(
        db.Integer,
        primary_key=True
    )

    username: str = db.Column(
        db.String(100),
        nullable=False
    )

    attempts: int = db.Column(
        db.Integer,
        server_default='1',
        nullable=False
    )

    last_attempt: datetime = db.Column(
        db.DateTime,
        nullable=False,
        server_default=func.now(),
        onupdate=func.now()
    )
