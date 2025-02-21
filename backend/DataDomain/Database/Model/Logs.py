from datetime import datetime

from sqlalchemy import func

from DataDomain.Database import db
from DataDomain.Database.Model import BaseModel


class Logs(BaseModel, db.Model):

    __tablename__ = 'logs'

    id: int = db.Column(
        db.Integer,
        primary_key=True
    )

    logger_name: str = db.Column(
        db.String(100),
        nullable=False
    )

    level: str = db.Column(
        db.String(20),
        nullable=False
    )

    message: str = db.Column(
        db.Text,
        nullable=False
    )

    data: str = db.Column(
        db.JSON,
        nullable=True
    )

    created_at: datetime = db.Column(
        db.DateTime,
        server_default=func.now()
    )
