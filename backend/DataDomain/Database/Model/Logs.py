from sqlalchemy import func, Integer, Column, String, DateTime, JSON

from DataDomain.Database.Model.BaseModel import BaseModel
from DataDomain.Database.db import db


class Logs(BaseModel, db.Model):

    __tablename__ = 'logs'

    id: Column[Integer] = db.Column(
        db.Integer,
        primary_key=True
    )

    logger_name: Column[String] = db.Column(
        db.String(100),
        nullable=False
    )

    level: Column[String] = db.Column(
        db.String(20),
        nullable=False
    )

    message: Column[String] = db.Column(
        db.String(255),
        nullable=False
    )

    data: Column[JSON] = db.Column(
        db.JSON,
        nullable=True
    )

    created_at: Column[DateTime] = db.Column(
        db.DateTime,
        server_default=func.now()
    )
