from sqlalchemy import func

from DataDomain.Database import db

tournament_subscriptions = db.Table(

    'tournament_subscriptions',

    db.Column(
        'tournament_id',
        db.Integer,
        db.ForeignKey('tournaments.id'),
        primary_key=True
    ),

    db.Column(
        'user_id',
        db.Integer,
        db.ForeignKey('users.id'),
        primary_key=True
    ),

    db.Column(
        'created_at',
        db.DateTime,
        server_default=func.now()
    )
)
