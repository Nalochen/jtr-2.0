import json
from typing import Dict, Any, Self

from sqlalchemy import func, DateTime, Column, Text, Integer
from sqlalchemy.ext.hybrid import hybrid_property

from database.db import db

from database.Models.BaseModel import BaseModel


class UserVersions(BaseModel, db.Model):

    id: Column[Integer] = db.Column(
        db.Integer,
        primary_key=True
    )

    user_id: Column[Integer] = db.Column(
        db.Integer,
        db.ForeignKey('users.id'),
        nullable=False,
    )

    version: Column[Integer] = db.Column(
        db.Integer,
        nullable=False
    )

    _changes: Column[Text] = db.Column(
        'changes',
        db.Text,
        nullable=False
    )

    updated_at: Column[DateTime] = db.Column(
        db.DateTime,
        default=func.now()
    )

    @hybrid_property
    def getChanges(self) -> Dict[str, Any]:
        """
        Parst den JSON-String aus der Datenbank und gibt die Änderungen als Dictionary zurück.
        """

        return json.loads(self._changes)

    @_changes.setter
    def setChanges(self, changesDict: Dict[str, Any]) -> Self:
        """
        Nimmt ein Dictionary und speichert es als JSON-String in der 'changes'-Spalte.
        """

        self._changes = json.dumps(changesDict)

        return self

    def serialize(self) -> Dict[str, Any]:
        """
        Serialisiert das Objekt in ein Dictionary.
        """

        serialized = super().serialize()

        serialized['changes'] = self.getChanges

        return serialized
