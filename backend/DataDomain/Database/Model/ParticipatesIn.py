from sqlalchemy import func

from DataDomain.Database.db import db

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
        server_default='0'
    ),

    db.Column(
        'registration_order',
        db.Integer,
        nullable=False,
    ),

    db.Column(
        'is_deleted',
        db.Boolean,
        nullable=False,
        server_default='0'
    ),

    db.Column(
        'has_payed',
        db.Boolean,
        nullable=False,
        server_default='0'
    ),

    db.Column(
        'created_at',
        db.DateTime,
        server_default=func.now()
    )
)
