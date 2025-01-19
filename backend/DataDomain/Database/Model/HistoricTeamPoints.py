from datetime import datetime

from sqlalchemy.orm import Mapped

from DataDomain.Database import db
from DataDomain.Database.Model import BaseModel


class HistoricTeamPoints(BaseModel, db.Model):

    __tablename__ = 'historic_team_points'

    id: int = db.Column(
        db.Integer,
        primary_key=True,
        autoincrement=True
    )

    team_id: int = db.Column(
        db.Integer,
        db.ForeignKey('teams.id'),
        nullable=False
    )

    points: float = db.Column(
        db.Float,
        nullable=False
    )

    date: datetime = db.Column(
        db.DateTime,
        nullable=False
    )

    team: Mapped['Teams'] = db.relationship(
        'Teams',
        back_populates='historic_points'
    )
