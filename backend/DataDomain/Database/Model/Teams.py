import json
from datetime import datetime
from typing import Any, Dict, List

from sqlalchemy import func
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy.orm import Mapped

from DataDomain.Database.db import db
from DataDomain.Database.Model.BaseModel import BaseModel
from DataDomain.Database.Model.IsPartOf import is_part_of
from DataDomain.Database.Model.ParticipatesIn import participates_in


class Teams(BaseModel, db.Model):

    __tablename__ = 'teams'

    id: int = db.Column(
        db.Integer,
        primary_key=True
    )

    name: str = db.Column(
        db.String(100),
        nullable=False
    )

    logo: str | None = db.Column(
        db.String(255),
        nullable=True
    )

    founded: datetime | None = db.Column(
        db.DateTime,
        nullable=True
    )

    points: float = db.Column(
        db.Float,
        server_default='0'
    )

    city: str | None = db.Column(
        db.String(100),
        nullable=True
    )

    training_time: str | None = db.Column(
        db.String(100),
        nullable=True
    )

    training_time_updated_at: datetime | None = db.Column(
        db.DateTime,
        nullable=True
    )

    about_us: str | None = db.Column(
        db.String(100),
        nullable=True,
    )

    contacts: str = db.Column(
        db.Text,
        nullable=False,
        default='[]',
        doc='["string"]'
    )

    is_mix_team: bool | None = db.Column(
        db.Boolean,
        nullable=True
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

    team_members: Mapped[List['Users']] = db. relationship(
        'Users',
        secondary=is_part_of,
        back_populates='teams'
    )

    tournaments: Mapped[List['Tournaments']] = db.relationship(
        'Tournaments',
        secondary=participates_in,
        back_populates='teams'
    )

    organized_tournaments: Mapped[List['Tournaments']] = db.relationship(
        'Tournaments',
        back_populates='organizer'
    )

    def serialize(self) -> Dict[str, Any]:
        """
        Serializes the object as a dictionary.
        """

        serialized = super().serialize()

        serialized['contacts'] = self.getContacts

        if serialized.get('trainingTimeUpdatedAt'):
            serialized['trainingTimeUpdatedAt'] = serialized.pop(
                'trainingTimeUpdatedAt').isoformat()
        serialized['founded'] = serialized.pop('founded').isoformat()
        serialized['createdAt'] = serialized.pop('createdAt').isoformat()
        serialized['updatedAt'] = serialized.pop('updatedAt').isoformat()

        return serialized

    @hybrid_property
    def getContacts(self) -> List[str]:
        """
        Parses the JSON string from the database and returns the changes as a dictionary.
        """

        return json.loads(str(self.contacts))
