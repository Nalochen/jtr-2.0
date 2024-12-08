from DataDomain.Database.Model.IsPartOf import is_part_of
from DataDomain.Database.db import db
from Infrastructure.Logger.Logger import logger


class IsPartOfRepository:
    """Repository for is_part_of related queries"""

    @staticmethod
    def get(userId: int, teamId: int) -> is_part_of:
        """Get is_part_of entry by userId and teamId"""

        return db.session.query(
            is_part_of
        ).filter(
            is_part_of.c.user_id == userId,
            is_part_of.c.team_id == teamId
        ).first()

    @staticmethod
    def create(userId: int, teamId: int, userRole: str) -> None:
        """Create a new is_part_of entry"""

        try:
            db.session.execute(
                is_part_of.insert().values(
                    user_id=userId,
                    team_id=teamId,
                    user_role=userRole
                )
            )
            db.session.commit()

            logger.info(f'IsPartOfRepository | create | Created is_part_of entry for user {
                        userId} in team {teamId}')

        except Exception as e:
            db.session.rollback()
            logger.error(f'IsPartOfRepository | create | {e}')
            raise e

    @staticmethod
    def delete(userId: int, teamId: int) -> None:
        """Set is_deleted on is_part_of entry to True"""

        try:
            db.session.query(
                is_part_of
            ).filter(
                is_part_of.c.user_id == userId,
                is_part_of.c.team_id == teamId
            ).update({
                'is_deleted': True
            })
            db.session.commit()

            logger.info(f'IsPartOfRepository | delete | Deleted is_part_of entry for user {
                        userId} in team {teamId}')

        except Exception as e:
            db.session.rollback()
            logger.error(f'IsPartOfRepository | delete | {e}')
            raise e
