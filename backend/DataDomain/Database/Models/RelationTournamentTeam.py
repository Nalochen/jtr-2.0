from sqlalchemy import func

from ..db import db


participates_in = db.Table(

    'participates_in',

    db.Column(
        'tournament_id',
        db.Integer,
        db.ForeignKey('tournaments.id'),
        primary_key=True
    ),

    db.Column(
        'team_id',
        db.Integer,
        db.ForeignKey('teams.id'),
        primary_key=True
    ),

    db.Column(
        'placement',
        db.Integer,
        nullable=True,
        default=None
    ),

    db.Column(
        'is_on_waiting_list',
        db.Boolean,
        nullable=False,
    ),

    db.Column(
        'has_played',
        db.Boolean,
        nullable=False,
        default=False
    ),

    db.Column(
        'registration_order',
        db.Integer,
        nullable=False,
    ),

    db.Column(
        'created_at',
        db.DateTime,
        default=func.now()
    )
)
