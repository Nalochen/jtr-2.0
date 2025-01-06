from datetime import datetime
from typing import Optional, List, Any, Dict

from sqlalchemy import func, Integer, Column, String, DateTime, Boolean
from sqlalchemy.orm import Mapped

from DataDomain.Database.Model.IsPartOf import is_part_of
from DataDomain.Database.db import db
from DataDomain.Database.Model.BaseModel import BaseModel


class Users(BaseModel, db.Model):

    __tablename__ = 'users'

    id: int = db.Column(
        db.Integer,
        primary_key=True
    )

    username: str = db.Column(
        db.String(100),
        nullable=False,
        unique=True
    )

    password_hash: str = db.Column(
        db.String(255),
        nullable=False
    )

    email: str | None = db.Column(
        db.String(100),
        unique=True,
        nullable=True
    )

    name: str | None = db.Column(
        db.String(100),
        nullable=True
    )

    name_visibility: bool = db.Column(
        db.Boolean,
        nullable=False
    )

    birthdate: datetime | None = db.Column(
        db.Date,
        nullable=True
    )

    birthdate_visibility: bool = db.Column(
        db.Boolean,
        nullable=False
    )

    picture: str | None = db.Column(
        db.String(255),
        nullable=True
    )

    pronouns: str | None = db.Column(
        db.String(255),
        nullable=True
    )

    city: str | None = db.Column(
        db.String(100),
        nullable=True
    )

    city_visibility: bool = db.Column(
        db.Boolean,
        nullable=False
    )

    is_deleted: bool = db.Column(
        db.Boolean,
        nullable=False,
        server_default='0'
    )

    created_at: datetime = db.Column(
        db.DateTime,
        server_default=func.now()
    )

    updated_at: datetime = db.Column(
        db.DateTime,
        server_default=func.now(),
        onupdate=func.now()
    )

    teams: Mapped[List['Teams']] = db.relationship(
        'Teams',
        secondary=is_part_of,
        back_populates='team_members'
    )

    def serialize(self) -> Dict[str, Any]:
        """
        Serializes the object as a dictionary.
        """

        serialized = super().serialize()

        del serialized['passwordHash']

        return serialized
