import json
from typing import Dict, Any, Self

from sqlalchemy import func, DateTime, Column, Text, Integer
from sqlalchemy.ext.hybrid import hybrid_property

from DataDomain.Database.db import db
from DataDomain.Database.Model.BaseModel import BaseModel


class TournamentVersions(BaseModel, db.Model):

    __tablename__ = 'tournament_versions'

    id: Column[Integer] = db.Column(
        db.Integer,
        primary_key=True
    )

    version: Column[Integer] = db.Column(
        db.Integer,
        nullable=False,
    )

    changes: Column[Text] = db.Column(
        'changes',
        db.Text(),
        nullable=False,
    )

    updated_at: Column[DateTime] = db.Column(
        db.DateTime,
        default=func.now()
    )

    tournament_id: Column[Integer] = db.Column(
        db.Integer,
        db.ForeignKey('tournaments.id'),
        nullable=False,
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
        Parses the JSON string from the database and returns the changes as a dictionary.
        """

        return json.loads(self.changes)

    @changes.setter
    def setChanges(self, changesDict: Dict[str, Any]) -> Self:
        """
        Takes the dictionary and safes it as a JSON-String in the 'changes' column.
        """

        self.changes = json.dumps(changesDict)

        return self
