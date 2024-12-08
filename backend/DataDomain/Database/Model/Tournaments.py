import json
from typing import List, Optional

from sqlalchemy import func, Column, Integer, DateTime, String, Text, Boolean, Enum
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy.orm import Mapped

from DataDomain.Database.Enum.TournamentCostTypesEnum import TournamentCostTypesEnum
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
from DataDomain.Database.Model.ParticipatesIn import participates_in
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

    start_arrival_date: Column[Text] = db.Column(
        db.DateTime,
        nullable=False
    )

    end_arrival_date: Column[Text] = db.Column(
        db.DateTime,
        nullable=False
    )

    registration_costs: Column[Optional[Integer]] = db.Column(
        db.Integer,
        nullable=True
    )

    registration_costs_type: Column[Optional[Enum]] = db.Column(
        db.Enum(TournamentCostTypesEnum),
        nullable=True
    )

    deposit_costs: Column[Optional[Integer]] = db.Column(
        db.Integer,
        nullable=True
    )

    deposit_costs_type: Column[Optional[Enum]] = db.Column(
        db.Enum(TournamentCostTypesEnum),
        nullable=True
    )

    accommodation_costs: Column[Optional[Integer]] = db.Column(
        db.Integer,
        nullable=True
    )

    accommodation_costs_type: Column[Optional[Enum]] = db.Column(
        db.Enum(TournamentCostTypesEnum),
        nullable=True
    )

    guest_costs: Column[Optional[Integer]] = db.Column(
        db.Integer,
        nullable=True
    )

    guest_costs_type: Column[Optional[Enum]] = db.Column(
        db.Enum(TournamentCostTypesEnum),
        nullable=True
    )

    costs_text: Column[Text] = db.Column(
        db.Text(),
        nullable=False,
        default=''
    )

    status: Column[Enum] = db.Column(
        Enum(TournamentStatusTypesEnum),
        nullable=False,
        server_default=TournamentStatusTypesEnum.CREATED.value
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

    accommodation_location: Column[String] = db.Column(
        db.String(255),
        nullable=False
    )

    location: Column[String] = db.Column(
        db.String(30),
        nullable=False
    )

    deadlines: Column[Text] = db.Column(
        db.Text(),
        nullable=False
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

    registration_start_date: Column[DateTime] = db.Column(
        db.DateTime(),
        nullable=False,
        server_default=func.now()
    )

    is_deleted: Column[Boolean] = db.Column(
        db.Boolean(),
        nullable=False,
        server_default='0'
    )

    created_at: Column[DateTime] = db.Column(
        db.DateTime(),
        server_default=func.now()
    )

    updated_at: Column[DateTime] = db.Column(
        db.DateTime(),
        server_default=func.now(),
        onupdate=func.now()
    )

    organizer_id: Column[Integer] = db.Column(
        db.Integer(),
        db.ForeignKey('teams.id'),
        nullable=False,
    )

    organizer: Mapped['Teams'] = db.relationship(
        'Teams',
        back_populates='organized_tournaments'
    )

    teams: Mapped[List['Teams']] = db.relationship(
        'Teams',
        secondary=participates_in,
        back_populates='tournaments'
    )

    @hybrid_property
    def getContacts(self) -> List[str]:
        """
        Parses the JSON string from the database and returns the changes as a dictionary.
        """

        return json.loads(str(self.contacts))
