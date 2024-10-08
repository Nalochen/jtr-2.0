import json
from typing import Dict, Any, List

from sqlalchemy import func, Column, Integer, DateTime, String, Text, Boolean, Enum
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy.orm import Mapped

from .BaseModel import BaseModel
from ..Enum import (
    TournamentFoodEveningTypesEnum,
    TournamentFoodGastroTypesEnum,
    TournamentFoodMorningTypesEnum,
    TournamentFoodNoonTypesEnum,
    TournamentStatusTypesEnum,
    RegistrationProcedureTypesEnum)
from ..db import db


class Tournaments(BaseModel, db.Model):

    id: Column[Integer] = db.Column(
        db.Integer,
        primary_key=True
    )

    name: Column[String] = db.Column(
        db.String(100),
        nullable=False
    )

    date: Column[Text] = db.Column(
        db.Text(),
        nullable=False
    )

    address: Column[String] = db.Column(
        db.String(255),
        nullable=False
    )

    possible_space: Column[Integer] = db.Column(
        db.Integer,
        nullable=False
    )

    arrival_time: Column[String] = db.Column(
        db.String(20),
        nullable=False
    )

    costs_per_user: Column[Integer] = db.Column(
        db.Integer,
        nullable=True,
        default=None
    )

    costs_per_team: Column[Integer] = db.Column(
        db.Integer,
        nullable=True,
        default=None
    )

    status: Column[Enum] = db.Column(
        Enum(TournamentStatusTypesEnum),
        nullable=False,
        default='created'
    )

    contacts: Column[Text] = db.Column(
        db.Text(),
        nullable=False
    )

    accommodation: Column[String] = db.Column(
        db.String(30),
        nullable=False
    )

    location: Column[String] = db.Column(
        db.String(30),
        nullable=False
    )

    deadlines: Column[Text] = db.Column(
        db.Text(),
        nullable=True
    )

    schedule: Column[Text] = db.Column(
        db.Text(),
        nullable=True
    )

    food_morning: Column[Enum] = db.Column(
        db.Enum(TournamentFoodMorningTypesEnum),
        nullable=True,
        default=None
    )

    food_noon: Column[Enum] = db.Column(
        db.Enum(TournamentFoodNoonTypesEnum),
        nullable=True,
        default=None
    )

    food_evening: Column[Enum] = db.Column(
        db.Enum(TournamentFoodEveningTypesEnum),
        nullable=True,
        default=None
    )

    food_gastro: Column[Enum] = db.Column(
        db.Enum(TournamentFoodGastroTypesEnum),
        nullable=True,
        default=None
    )

    shoes_text: Column[Text] = db.Column(
        db.Text(),
        nullable=False
    )

    shoes_url: Column[String] = db.Column(
        db.String(255),
        nullable=False
    )

    studded_shoes_allowed: Column[Boolean] = db.Column(
        db.Boolean(),
        nullable=False
    )

    cam_shoes_allowed: Column[Boolean] = db.Column(
        db.Boolean(),
        nullable=False
    )

    cleats_shoes_allowed: Column[Boolean] = db.Column(
        db.Boolean(),
        nullable=False
    )

    barefoot_allowed: Column[Boolean] = db.Column(
        db.Boolean(),
        nullable=False
    )

    house_rules_text: Column[Text] = db.Column(
        db.Text(),
        nullable=False
    )

    house_rules_url: Column[String] = db.Column(
        db.String(255),
        nullable=False
    )

    tournament_system_text: Column[Text] = db.Column(
        db.Text(),
        nullable=False
    )

    tournament_system_url: Column[String] = db.Column(
        db.String(255),
        nullable=False
    )

    pompf_check_text: Column[Text] = db.Column(
        db.Text(),
        nullable=False
    )

    pompf_check_url: Column[String] = db.Column(
        db.String(255),
        nullable=False
    )

    registration_procedure_text: Column[Text] = db.Column(
        db.Text(),
        nullable=False
    )

    registration_procedure_type: Column[Enum] = db.Column(
        Enum(RegistrationProcedureTypesEnum),
        nullable=False
    )

    registration_open_at: Column[DateTime] = db.Column(
        db.DateTime,
        nullable=False,
        default=func.now()
    )

    created_at: Column[DateTime] = db.Column(
        db.DateTime,
        default=func.now()
    )

    updated_at: Column[DateTime] = db.Column(
        db.DateTime,
        onupdate=func.now()
    )

    organizer_id: Column[Integer] = db.Column(
        db.Integer,
        db.ForeignKey('users.id')
    )

    teams: Mapped[List['Teams']] = db.relationship(
        'Teams',
        secondary='participates_in',
        backref='tournaments'
    )

    team_organizer_id: Column[Integer] = db.Column(
        db.Integer,
        db.ForeignKey('teams.id')
    )

    def serialize(self) -> Dict[str, Any]:
        """
        Serialisiert das Objekt in ein Dictionary.
        """

        serialized = super().serialize()

        serialized['date'] = self.getDate
        serialized['contacts'] = self.getContacts

        serialized['team_count'] = self.teams.count()

        serialized['costs'] = {
            'user': serialized.pop('costs_per_user'),
            'team': serialized.pop('costs_per_team')
        }

        serialized['house_rules'] = {
            'url': serialized.pop('house_rules_url'),
            'text': serialized.pop('house_rules_text')
        }

        serialized['tournament_system'] = {
            'url': serialized.pop('tournament_system_url'),
            'text': serialized.pop('tournament_system_text')
        }

        serialized['pompf_check'] = {
            'url': serialized.pop('pompf_check_url'),
            'text': serialized.pop('pompf_check_text')
        }

        serialized['registration_procedure'] = {
            'url': serialized.pop('registration_procedure_url'),
            'type': serialized.pop('registration_procedure_type')
        }

        serialized['food'] = {
            'morning': serialized.pop('food_morning'),
            'noon': serialized.pop('food_noon'),
            'evening': serialized.pop('food_evening'),
            'gastro': serialized.pop('gastro')
        }

        serialized['shoes'] = {
            'url': serialized.pop('shoes_url'),
            'text': serialized.pop('shoes_text'),
            'studded_allowed': serialized.pop('studded_shoes_allowed'),
            'cam_allowed': serialized.pop('cam_shoes_allowed'),
            'cleats_allowed': serialized.pop('cleats_shoes_allowed'),
            'barefoot_allowed': serialized.pop('barefoot_allowed')
        }

        return serialized

    @hybrid_property
    def getDate(self) -> Dict[str, DateTime]:
        """
        Parst den JSON-String aus der Datenbank und gibt die Änderungen als Dictionary zurück.
        """

        return json.loads(self.date)

    @hybrid_property
    def getContacts(self) -> List[str]:
        """
        Parst den JSON-String aus der Datenbank und gibt die Änderungen als Dictionary zurück.
        """

        return json.loads(self.contacts)
