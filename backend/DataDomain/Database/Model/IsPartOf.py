from sqlalchemy import Enum, Integer, ForeignKey, func

from DataDomain.Database.Enum.UserRoleTypesEnum import UserRoleTypesEnum
from DataDomain.Database.db import db


is_part_of = db.Table(

    'is_part_of',

    db.Column(
        'user_id',
        Integer,
        ForeignKey('users.id'),
        primary_key=True
    ),

    db.Column(
        'team_id',
        Integer,
        ForeignKey('teams.id'),
        primary_key=True
    ),

    db.Column(
        'user_role',
        Enum(UserRoleTypesEnum),
        nullable=False,
        server_default='member'
    ),

    db.Column(
        'is_deleted',
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
