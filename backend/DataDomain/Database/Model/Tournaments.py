import json
from typing import Dict, Any, List, Optional

from sqlalchemy import func, Column, Integer, DateTime, String, Text, Boolean, Enum
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy.orm import Mapped

from DataDomain.Database.db import db
from DataDomain.Database.Enum.TournamentAccommodationTypesEnum import TournamentAccommodationTypesEnum
from DataDomain.Database.Enum.TournamentFoodEveningTypesEnum import TournamentFoodEveningTypesEnum
from DataDomain.Database.Enum.TournamentFoodGastroTypesEnum import TournamentFoodGastroTypesEnum
from DataDomain.Database.Enum.TournamentFoodMorningTypesEnum import TournamentFoodMorningTypesEnum
from DataDomain.Database.Enum.TournamentFoodNoonTypesEnum import TournamentFoodNoonTypesEnum
from DataDomain.Database.Enum.TournamentRegistrationProcedureTypesEnum import TournamentRegistrationProcedureTypesEnum
from DataDomain.Database.Enum.TournamentStatusTypesEnum import TournamentStatusTypesEnum
from DataDomain.Database.Enum.TournamentSystemTypesEnum import TournamentSystemTypesEnum
from DataDomain.Database.Model.BaseModel import BaseModel
from DataDomain.Database.Model.RelationTournamentTeam import participates_in
from DataDomain.Database.Model.Teams import Teams


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

    tournament_system_type: Column[Enum] = db.Column(
        db.Enum(TournamentSystemTypesEnum),
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
        Enum(TournamentRegistrationProcedureTypesEnum),
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
            'start': serialized.pop('startDate').isoformat(),
            'end': serialized.pop('endDate').isoformat()
        }

        serialized['deadlines'] = self.getDeadlines

        serialized['contacts'] = self.getContacts

        serialized['teamCount'] = len(self.teams)

        serialized['status'] = serialized.pop('status').value

        serialized['registrationOpenAt'] = serialized.pop(
            'registrationOpenAt').isoformat()
        serialized['createdAt'] = serialized.pop('createdAt').isoformat()
        serialized['updatedAt'] = serialized.pop('updatedAt').isoformat()

        serialized['costs'] = {
            'user': serialized.pop('costsPerUser'),
            'team': serialized.pop('costsPerTeam')
        }

        serialized['accommodation'] = {
            'type': serialized.pop('accommodationType').value,
            'text': serialized.pop('accommodationText'),
        }

        serialized['houseRules'] = {
            'url': serialized.pop('houseRulesUrl'),
            'text': serialized.pop('houseRulesText')
        }

        serialized['tournamentSystem'] = {
            'url': serialized.pop('tournamentSystemUrl'),
            'text': serialized.pop('tournamentSystemText'),
            'type': serialized.pop('tournamentSystemType').value
        }

        serialized['pompfCheck'] = {
            'url': serialized.pop('pompfCheckUrl'),
            'text': serialized.pop('pompfCheckText')
        }

        serialized['registrationProcedure'] = {
            'url': serialized.pop('registrationProcedureUrl'),
            'type': serialized.pop('registrationProcedureType').value,
            'text': serialized.pop('registrationProcedureText')
        }

        serialized['food'] = {
            'morning': serialized.pop('foodMorning').value if serialized.get('foodMorning') else None,
            'noon': serialized.pop('foodNoon').value if serialized.get('foodNoon') else None,
            'evening': serialized.pop('foodEvening').value if serialized.get('foodEvening') else None,
            'gastro': serialized.pop('foodGastro').value if serialized.get('foodGastro') else None}

        serialized['shoes'] = {
            'url': serialized.pop('shoesUrl'),
            'text': serialized.pop('shoesText'),
            'studdedAllowed': serialized.pop('studdedShoesAllowed'),
            'camAllowed': serialized.pop('camShoesAllowed'),
            'cleatsAllowed': serialized.pop('cleatsShoesAllowed'),
            'barefootAllowed': serialized.pop('barefootAllowed')
        }

        serialized['teams'] = [team.serialize() for team in self.teams]
        serialized['organizer'] = Teams.query.get(
            serialized.pop('organizerId')).serialize()

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
