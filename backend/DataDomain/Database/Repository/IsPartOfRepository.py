from DataDomain.Database.Model.RelationUserTeam import is_part_of
from DataDomain.Database.db import db


class IsPartOfRepository:
    """Repository for is_part_of related queries"""

    @staticmethod
    def get(userId: int, teamId: int) -> is_part_of:
        return db.session.query(is_part_of).filter(
            is_part_of.c.user_id == userId,
            is_part_of.c.team_id == teamId
        ).first()