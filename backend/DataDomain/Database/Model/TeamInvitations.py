from sqlalchemy import func

from DataDomain.Database.db import db

team_invitations = db.Table(

    'team_invitations',

    db.Column(
        'team_id',
        db.Integer,
        db.ForeignKey('teams.id'),
        primary_key=True
    ),

    db.Column(
        'user_id',
        db.Integer,
        db.ForeignKey('users.id'),
        primary_key=True
    ),

    db.Column(
        'hash',
        db.String(255),
        nullable=False
    ),

    db.Column(
        'created_at',
        db.DateTime,
        server_default=func.now()
    )
)
