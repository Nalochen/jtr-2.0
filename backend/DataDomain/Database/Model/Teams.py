import json
from typing import Optional, List, Text, Dict, Any
from sqlalchemy import func, Integer, Column, String, DateTime, Boolean, Null
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy.orm import Mapped

from DataDomain.Database.Model.BaseModel import BaseModel
from DataDomain.Database.Model.RelationTournamentTeam import participates_in
from DataDomain.Database.Model.RelationUserTeam import is_part_of
from DataDomain.Database.db import db


class Teams(BaseModel, db.Model):

    __tablename__ = 'teams'

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
        default=func.now()
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
        nullable=True,
    )

    contacts: Column[Optional[Text]] = db.Column(
        db.Text(),
        nullable=True,
        default='[]',
        doc='["string"]'
    )

    is_mix_team: Column[Optional[Boolean]] = db.Column(
        db.Boolean(),
        nullable=True
    )

    last_tournament_played: Column[Optional[DateTime]] = db.Column(
        db.DateTime,
        nullable=True
    )

    last_tournament_organized: Column[Optional[DateTime]] = db.Column(
        db.DateTime,
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

    team_members: Mapped[List['Users']] = db. relationship(
        'Users',
        secondary=is_part_of,
        backref='teams_backref'
    )

    tournaments: Mapped[List['Tournaments']] = db.relationship(
        'Tournaments',
        secondary=participates_in,
        backref='teams_backref'
    )

    organized_tournaments: Mapped[List['Tournaments']] = db.relationship(
        'Tournaments',
        backref='organizer_team'
    )

    def serialize(self) -> Dict[str, Any]:
        """
        Serializes the object as a dictionary.
        """

        serialized = super().serialize()

        serialized['contacts'] = self.getContacts

        return serialized

    @hybrid_property
    def getContacts(self) -> List[str]:
        """
        Parses the JSON string from the database and returns the changes as a dictionary.
        """

        return json.loads(self.contacts)
