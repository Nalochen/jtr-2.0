import json
from typing import Dict, Any, List, Optional

from sqlalchemy import func, Column, Integer, DateTime, String, Text, Boolean, Enum
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy.orm import Mapped

from DataDomain.Database.Enum.TournamentAccommodationTypesEnum import TournamentAccommodationTypesEnum
from DataDomain.Database.Model.BaseModel import BaseModel
from DataDomain.Database.Model.RelationTournamentTeam import participates_in
from DataDomain.Database.Enum.RegistrationProcedureTypesEnum import RegistrationProcedureTypesEnum
from DataDomain.Database.Enum.TournamentFoodEveningTypesEnum import TournamentFoodEveningTypesEnum
from DataDomain.Database.Enum.TournamentFoodGastroTypesEnum import TournamentFoodGastroTypesEnum
from DataDomain.Database.Enum.TournamentFoodMorningTypesEnum import TournamentFoodMorningTypesEnum
from DataDomain.Database.Enum.TournamentFoodNoonTypesEnum import TournamentFoodNoonTypesEnum
from DataDomain.Database.Enum.TournamentStatusTypesEnum import TournamentStatusTypesEnum
from DataDomain.Database.Model.Teams import Teams
from DataDomain.Database.db import db


class Tournaments(BaseModel, db.Model):

    __tablename__ = 'tournaments'

    id: Column[Integer] = db.Column(
        db.Integer,
        primary_key=True
    )

    name: Column[String] = db.Column(
        db.String(100),
        nullable=False
    )

    start_date: Column[Text] = db.Column(
        db.DateTime,
        nullable=False,
    )

    end_date: Column[Text] = db.Column(
        db.DateTime,
        nullable=False,
    )

    additional_information: Column[Text] = db.Column(
        db.Text(),
        nullable=False,
        default=''
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
        default=TournamentStatusTypesEnum.CREATED
    )

    contacts: Column[Text] = db.Column(
        db.Text(),
        nullable=False,
        doc='["string"]'
    )

    accommodation_type: Column[Enum] = db.Column(
        Enum(TournamentAccommodationTypesEnum),
        nullable=False
    )

    accommodation_text: Column[String] = db.Column(
        db.String(255),
        nullable=False
    )

    location: Column[String] = db.Column(
        db.String(30),
        nullable=False
    )

    deadlines: Column[Text] = db.Column(
        db.Text(),
        nullable=False,
        default='[]',
        doc='["string"]'
    )

    schedule: Column[Optional[Text]] = db.Column(
        db.Text(),
        nullable=True
    )

    food_morning: Column[Optional[Enum]] = db.Column(
        db.Enum(TournamentFoodMorningTypesEnum),
        nullable=True
    )

    food_noon: Column[Optional[Enum]] = db.Column(
        db.Enum(TournamentFoodNoonTypesEnum),
        nullable=True
    )

    food_evening: Column[Optional[Enum]] = db.Column(
        db.Enum(TournamentFoodEveningTypesEnum),
        nullable=True
    )

    food_gastro: Column[Optional[Enum]] = db.Column(
        db.Enum(TournamentFoodGastroTypesEnum),
        nullable=True
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
        nullable=True
    )

    registration_procedure_type: Column[Enum] = db.Column(
        Enum(RegistrationProcedureTypesEnum),
        nullable=False
    )

    registration_procedure_url: Column[Text] = db.Column(
        db.String(255),
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
        default=func.now(),
        onupdate=func.now()
    )

    organizer_id: Column[Integer] = db.Column(
        db.Integer,
        db.ForeignKey('teams.id'),
        nullable=False,
    )

    organized_tournaments: Mapped['Teams'] = db.relationship(
        'Teams',
        back_populates='tournaments'
    )

    teams: Mapped[List['Teams']] = db.relationship(
        'Teams',
        secondary=participates_in,
        backref='tournament_backref'
    )

    def serialize(self) -> Dict[str, Any]:
        """
        Serializes the object as a dictionary.
        """

        serialized = super().serialize()

        serialized['date'] = {
            'start': serialized.pop('start_date').isoformat(),
            'end': serialized.pop('end_date').isoformat()
        }

        serialized['deadlines'] = self.getDeadlines

        serialized['contacts'] = self.getContacts

        serialized['teamCount'] = len(self.teams)

        serialized['status'] = serialized.pop('status').value

        serialized['registrationOpenAt'] = serialized.pop(
            'registration_open_at').isoformat()
        serialized['createdAt'] = serialized.pop('created_at').isoformat()
        serialized['updatedAt'] = serialized.pop('updated_at').isoformat()

        serialized['costs'] = {
            'user': serialized.pop('costs_per_user'),
            'team': serialized.pop('costs_per_team')
        }

        serialized['accommodation'] = {
            'type': serialized.pop('accommodation_type').value,
            'text': serialized.pop('accommodation_text'),
        }

        serialized['houseRules'] = {
            'url': serialized.pop('house_rules_url'),
            'text': serialized.pop('house_rules_text')
        }

        serialized['tournamentSystem'] = {
            'url': serialized.pop('tournament_system_url'),
            'text': serialized.pop('tournament_system_text')
        }

        serialized['pompfCheck'] = {
            'url': serialized.pop('pompf_check_url'),
            'text': serialized.pop('pompf_check_text')
        }

        serialized['registrationProcedure'] = {
            'url': serialized.pop('registration_procedure_url'),
            'type': serialized.pop('registration_procedure_type').value,
            'text': serialized.pop('registration_procedure_text')
        }

        serialized['food'] = {
            'morning': serialized.get('food_morning').value if serialized.get('food_morning') else None,
            'noon': serialized.get('food_noon').value if serialized.get('food_noon') else None,
            'evening': serialized.get('food_evening').value if serialized.get('food_evening') else None,
            'gastro': serialized.get('food_gastro').value if serialized.get('food_gastro') else None}

        serialized.pop('food_morning')
        serialized.pop('food_noon')
        serialized.pop('food_evening')
        serialized.pop('food_gastro')

        serialized['shoes'] = {
            'url': serialized.pop('shoes_url'),
            'text': serialized.pop('shoes_text'),
            'studdedAllowed': serialized.pop('studded_shoes_allowed'),
            'camAllowed': serialized.pop('cam_shoes_allowed'),
            'cleatsAllowed': serialized.pop('cleats_shoes_allowed'),
            'barefootAllowed': serialized.pop('barefoot_allowed')
        }

        serialized['teams'] = [team.serialize() for team in self.teams]
        serialized['organizer'] = Teams.query.get(
            serialized.pop('organizer_id')).serialize()

        # TODO
        serialized['arrivalTime'] = serialized.pop('arrival_time')
        serialized['additionalInformation'] = serialized.pop('additional_information')
        serialized['possibleSpace'] = serialized.pop('possible_space')

        return serialized

    @hybrid_property
    def getContacts(self) -> List[str]:
        """
        Parses the JSON string from the database and returns the changes as a dictionary.
        """

        return json.loads(str(self.contacts))

    @hybrid_property
    def getDeadlines(self) -> List[str]:
        """
        Parses the JSON string from the database and returns the changes as a dictionary.
        """

        return json.loads(str(self.deadlines))
