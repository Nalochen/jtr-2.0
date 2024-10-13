from sqlalchemy import Enum, Integer, ForeignKey, func

from ..Enum.UserRoleTypesEnum import UserRoleTypesEnum
from ..db import db


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
        default='member'
    ),

    db.Column(
        'created_at',
        db.DateTime,
        default=func.now()
    )
)
