from typing import Optional, List
from sqlalchemy import func, Integer, Column, String, DateTime, Boolean, Null
from sqlalchemy.orm import Mapped

from database.Models.Tournaments import Tournaments
from database.Models.Users import Users
from database.db import db
from database.Models.BaseModel import BaseModel


class Teams(BaseModel, db.Model):

    id: Column[Integer] = db.Column(
        db.Integer,
        primary_key=True
    )

    name: Column[String] = db.Column(
        db.String(100),
        nullable=False
    )

    logo: Column[Optional[String]] = db.Column(
        db.String(255),
        nullable=True
    )

    founded: Column[Optional[DateTime]] = db.Column(
        db.DateTime,
        nullable=True
    )

    city: Column[Optional[String]] = db.Column(
        db.String(100),
        nullable=True
    )

    training_time: Column[Optional[String]] = db.Column(
        db.String(100),
        nullable=True
    )

    about_us: Column[Optional[String]] = db.Column(
        db.String(100),
        nullable=True
    )

    # TODO: ???
    contacts: Column[Optional[String]] = db.Column(
        db.String(100),
        nullable=True
    )

    is_mix_team: Column[Optional[Boolean]] = db.Column(
        db.Boolean(),
        nullable=True
    )

    last_tournament_played: Column[DateTime | Null] = db.Column(
        db.DateTime,
        nullable=True
    )

    last_tournament_organized: Column[DateTime | Null] = db.Column(
        db.DateTime,
        nullable=True
    )

    created_at: Column[DateTime] = db.Column(
        db.DateTime,
        default=func.now()
    )

    updated_at: Column[DateTime] = db.Column(
        db.DateTime,
        onupdate=func.now()
    )

    users: Mapped[List['Users']] = db.relationship(
        'Users', secondary='is_part_of', backref='teams'
    )

    organized_tournaments: Mapped[List['Tournaments']] = db.relationship(
        'Tournaments',
        backref='team_organizer'
    )
