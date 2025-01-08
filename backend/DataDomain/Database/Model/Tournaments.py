import json
from datetime import datetime
from typing import List

from sqlalchemy import Column, Enum, func
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy.orm import Mapped

from DataDomain.Database.db import db
from DataDomain.Database.Enum.TournamentAccommodationTypesEnum import (
    TournamentAccommodationTypesEnum,
)
from DataDomain.Database.Enum.TournamentCostTypesEnum import TournamentCostTypesEnum
from DataDomain.Database.Enum.TournamentFoodEveningTypesEnum import (
    TournamentFoodEveningTypesEnum,
)
from DataDomain.Database.Enum.TournamentFoodGastroTypesEnum import (
    TournamentFoodGastroTypesEnum,
)
from DataDomain.Database.Enum.TournamentFoodMorningTypesEnum import (
    TournamentFoodMorningTypesEnum,
)
from DataDomain.Database.Enum.TournamentFoodNoonTypesEnum import (
    TournamentFoodNoonTypesEnum,
)
from DataDomain.Database.Enum.TournamentRegistrationProcedureTypesEnum import (
    TournamentRegistrationProcedureTypesEnum,
)
from DataDomain.Database.Enum.TournamentStatusTypesEnum import TournamentStatusTypesEnum
from DataDomain.Database.Model.BaseModel import BaseModel
from DataDomain.Database.Model.ParticipatesIn import participates_in
from DataDomain.Database.Model.Teams import Teams


class Tournaments(BaseModel, db.Model):

    __tablename__ = 'tournaments'

    id: int = db.Column(
        db.Integer,
        primary_key=True
    )

    name: str = db.Column(
        db.String(100),
        nullable=False
    )

    start_date: datetime = db.Column(
        db.DateTime,
        nullable=False,
    )

    end_date: datetime = db.Column(
        db.DateTime,
        nullable=False,
    )

    additional_information: str = db.Column(
        db.Text,
        nullable=False,
        default=''
    )

    address: str = db.Column(
        db.String(255),
        nullable=False
    )

    possible_space: int = db.Column(
        db.Integer,
        nullable=False
    )

    start_arrival_date: datetime | None = db.Column(
        db.DateTime,
        nullable=True
    )

    end_arrival_date: datetime | None = db.Column(
        db.DateTime,
        nullable=True
    )

    registration_costs: int | None = db.Column(
        db.Integer,
        nullable=True
    )

    registration_costs_type: TournamentCostTypesEnum | None = db.Column(
        db.Enum(TournamentCostTypesEnum),
        nullable=True
    )

    deposit_costs: int | None = db.Column(
        db.Integer,
        nullable=True
    )

    deposit_costs_type: TournamentCostTypesEnum | None = db.Column(
        db.Enum(TournamentCostTypesEnum),
        nullable=True
    )

    accommodation_costs: int | None = db.Column(
        db.Integer,
        nullable=True
    )

    accommodation_costs_type: TournamentCostTypesEnum | None = db.Column(
        db.Enum(TournamentCostTypesEnum),
        nullable=True
    )

    guest_costs: int | None = db.Column(
        db.Integer,
        nullable=True
    )

    guest_costs_type: TournamentCostTypesEnum | None = db.Column(
        db.Enum(TournamentCostTypesEnum),
        nullable=True
    )

    costs_text: str = db.Column(
        db.Text,
        nullable=False,
        default=''
    )

    status: Column[Enum] = db.Column(
        Enum(TournamentStatusTypesEnum),
        nullable=False,
        server_default=TournamentStatusTypesEnum.CREATED.value
    )

    contacts: str = db.Column(
        db.Text,
        nullable=False,
        doc='["string"]'
    )

    accommodation_type: TournamentAccommodationTypesEnum = db.Column(
        Enum(TournamentAccommodationTypesEnum),
        nullable=False
    )

    accommodation_location: str = db.Column(
        db.String(255),
        nullable=False
    )

    location: str = db.Column(
        db.String(30),
        nullable=False
    )

    deadlines: str = db.Column(
        db.Text,
        nullable=False
    )

    schedule: str | None = db.Column(
        db.Text,
        nullable=True
    )

    food_morning: TournamentFoodMorningTypesEnum = db.Column(
        db.Enum(TournamentFoodMorningTypesEnum),
        nullable=False
    )

    food_noon: TournamentFoodNoonTypesEnum = db.Column(
        db.Enum(TournamentFoodNoonTypesEnum),
        nullable=False
    )

    food_evening: TournamentFoodEveningTypesEnum = db.Column(
        db.Enum(TournamentFoodEveningTypesEnum),
        nullable=False
    )

    food_gastro: TournamentFoodGastroTypesEnum = db.Column(
        db.Enum(TournamentFoodGastroTypesEnum),
        nullable=False
    )

    shoes_text: str | None = db.Column(
        db.Text,
        nullable=True
    )

    studded_shoes_allowed: bool = db.Column(
        db.Boolean,
        nullable=False
    )

    cam_shoes_allowed: bool = db.Column(
        db.Boolean,
        nullable=False
    )

    cleats_shoes_allowed: bool = db.Column(
        db.Boolean,
        nullable=False
    )

    barefoot_allowed: bool = db.Column(
        db.Boolean,
        nullable=False
    )

    house_rules_text: str = db.Column(
        db.Text,
        nullable=False
    )

    house_rules_url: str = db.Column(
        db.String(255),
        nullable=False
    )

    tournament_system_text: str = db.Column(
        db.Text,
        nullable=False
    )

    tournament_system_url: str = db.Column(
        db.String(255),
        nullable=False
    )

    pompf_check_text: str = db.Column(
        db.Text,
        nullable=False
    )

    pompf_check_url: str = db.Column(
        db.String(255),
        nullable=False
    )

    registration_procedure_text: str = db.Column(
        db.Text,
        nullable=True
    )

    registration_procedure_type: TournamentRegistrationProcedureTypesEnum = db.Column(
        Enum(TournamentRegistrationProcedureTypesEnum), nullable=False)

    registration_procedure_url: str = db.Column(
        db.String(255),
        nullable=False
    )

    registration_start_date: datetime = db.Column(
        db.DateTime,
        nullable=False,
        server_default=func.now()
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

    organizer_id: int = db.Column(
        db.Integer,
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
