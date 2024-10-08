from sqlalchemy import Enum

from DataDomain.ORM.Enum.UserRoleTypeEnum import UserRoleTypeEnum
from database.db import db


is_part_of = db.Table(

    'is_part_of',

    db.Column(
        'user_id',
        db.Integer,
        db.ForeignKey('users.id'),
        primary_key=True
    ),

    db.Column(
        'team_id',
        db.Integer,
        db.ForeignKey('teams.id'),
        primary_key=True
    ),

    db.Column(
        'user_role',
        Enum(UserRoleTypeEnum),
        nullable=False,
        default='member'
    )
)
