from typing import Optional, List, Any, Dict

from sqlalchemy import func, Integer, Column, String, DateTime
from sqlalchemy.orm import Mapped

from DataDomain.Database.Model.RelationUserTeam import is_part_of
from DataDomain.Database.db import db
from DataDomain.Database.Model.BaseModel import BaseModel


class Users(BaseModel, db.Model):

    __tablename__ = 'users'

    id: Column[Integer] = db.Column(
        db.Integer,
        primary_key=True
    )

    username: Column[String] = db.Column(
        db.String(100),
        nullable=False,
        unique=True
    )

    password_hash: Column[String] = db.Column(
        db.String(255),
        nullable=False
    )

    email: Column[Optional[String]] = db.Column(
        db.String(100),
        unique=True,
        nullable=True
    )

    name: Column[Optional[String]] = db.Column(
        db.String(100),
        nullable=True
    )

    birthday: Column[Optional[DateTime]] = db.Column(
        db.Date,
        nullable=True
    )

    picture: Column[Optional[String]] = db.Column(
        db.String(255),
        nullable=True
    )

    created_at: Column[DateTime] = db.Column(
        db.DateTime,
        default=func.now()
    )

    updated_at: Column[DateTime] = db.Column(
        db.DateTime,
        default=func.now(),
        onupdate=func.now()
    )

    teams: Mapped[List['Teams']] = db.relationship(
        'Teams',
        secondary=is_part_of,
        backref='users_backref'
    )

    def serialize(self) -> Dict[str, Any]:
        """
        Serializes the object as a dictionary.
        """

        serialized = super().serialize()

        del serialized['password_hash']

        return serialized
