from typing import Optional, List, Any, Dict

from sqlalchemy import func, Integer, Column, String, DateTime, Boolean, text
from sqlalchemy.orm import Mapped

from DataDomain.Database.Model.IsPartOf import is_part_of
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

    name_visibility: Column[Boolean] = db.Column(
        db.Boolean,
        nullable=False
    )

    birthdate: Column[Optional[DateTime]] = db.Column(
        db.Date,
        nullable=True
    )

    birthdate_visibility: Column[Boolean] = db.Column(
        db.Boolean,
        nullable=False
    )

    picture: Column[Optional[String]] = db.Column(
        db.String(255),
        nullable=True
    )

    pronouns: Column[Optional[String]] = db.Column(
        db.String(255),
        nullable=True
    )

    city: Column[Optional[String]] = db.Column(
        db.String(100),
        nullable=True
    )

    city_visibility: Column[Boolean] = db.Column(
        db.Boolean,
        nullable=False
    )

    is_deleted: Column[Boolean] = db.Column(
        db.Boolean,
        nullable=False,
        server_default='0'
    )

    created_at: Column[DateTime] = db.Column(
        db.DateTime,
        server_default=func.now()
    )

    updated_at: Column[DateTime] = db.Column(
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
