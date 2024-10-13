import json
from typing import Dict, Any, Self

from sqlalchemy import func, Integer, Column, Text, DateTime
from sqlalchemy.ext.hybrid import hybrid_property

from ..db import db
from .BaseModel import BaseModel


class TeamVersions(BaseModel, db.Model):

    __tablename__ = 'team_versions'

    id: Column[Integer] = db.Column(
        db.Integer,
        primary_key=True
    )

    team_id: Column[Integer] = db.Column(
        db.Integer,
        db.ForeignKey('teams.id')
    )

    version: Column[Integer] = db.Column(
        db.Integer,
        nullable=False
    )

    changes: Column[Text] = db.Column(
        'changes',
        db.Text,
        nullable=False
    )

    updated_at: Column[DateTime] = db.Column(
        db.DateTime,
        default=func.now()
    )

    def serialize(self) -> Dict[str, Any]:
        """
        Serializes the object as a dictionary.
        """

        serialized = super().serialize()

        serialized['changes'] = self.getChanges

        return serialized

    @hybrid_property
    def getChanges(self) -> Dict[str, Any]:
        """
        Parst den JSON-String aus der Datenbank und gibt die Änderungen als Dictionary zurück.
        """

        return json.loads(self.changes)

    @changes.setter
    def setChanges(self, changesDict: Dict[str, Any]) -> Self:
        """
        Takes the dictionary and safes it as a JSON-String in the 'changes' column.
        """

        self.changes = json.dumps(changesDict)

        return self
