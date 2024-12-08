from sqlalchemy import func

from DataDomain.Database.Model.ParticipatesIn import participates_in
from DataDomain.Database.db import db
from Infrastructure.Logger.Logger import logger


class ParticipatesInRepository:
    """Repository for participates_in related queries"""

    @staticmethod
    def get(tournamentId: int, teamId: int) -> participates_in:
        """Get participates_in entry by tournamentId and teamId"""

        return db.session.query(
            participates_in
        ).filter(
            participates_in.c.tournament_id == tournamentId,
            participates_in.c.team_id == teamId
        ).first()

    def create(self, tournamentId: int, teamId: int) -> None:
        """Create a new participates_in entry"""

        try:
            maxOrder = self.nextFreeRegistrationOrder(tournamentId)

            db.session.execute(
                participates_in.insert().values(
                    tournament_id=tournamentId,
                    team_id=teamId,
                    registration_order=maxOrder
                )
            )
            db.session.commit()

            logger.info(f'ParticipatesInRepository | create | Created participates_in entry for tournament {
                        tournamentId} and team {teamId}')

        except Exception as e:
            db.session.rollback()
            logger.error(f'ParticipatesInRepository | delete | {e}')
            raise e

    @staticmethod
    def delete(tournamentId: int, teamId: int) -> None:
        """Set is_deleted on participates_in entry to True"""

        try:
            db.session.execute(
                participates_in.update().values(
                    registration_order=participates_in.c.registration_order - 1
                ).where(
                    participates_in.c.tournament_id == tournamentId,
                    participates_in.c.registration_order > db.session.query(
                        participates_in.c.registration_order
                    ).filter(
                        participates_in.c.tournament_id == tournamentId,
                        participates_in.c.team_id == teamId
                    ).scalar()
                )
            )

            db.session.query(
                participates_in
            ).filter(
                participates_in.c.tournament_id == tournamentId,
                participates_in.c.team_id == teamId
            ).update().values(
                is_deleted=True,
                registration_order=None
            )
            db.session.commit()

            logger.info(f'ParticipatesInRepository | delete | Deleted participates_in entry for tournament {
                        tournamentId} and team {teamId}')

        except Exception as e:
            db.session.rollback()
            logger.error(f'ParticipatesInRepository | delete | {e}')
            raise e

    def recreate(self, tournamentId: int, teamId: int) -> None:
        """Recreate a participates_in entry"""

        maxOrder = self.nextFreeRegistrationOrder(tournamentId)

        try:
            db.session.query(
                participates_in
            ).filter(
                participates_in.c.tournament_id == tournamentId,
                participates_in.c.team_id == teamId
            ).update().values(
                is_deleted=False,
                registration_order=maxOrder
            )
            db.session.commit()

            logger.info(f'ParticipatesInRepository | recreate | Recreated participates_in entry for tournament {
                        tournamentId} and team {teamId}')

        except Exception as e:
            db.session.rollback()
            logger.error(f'ParticipatesInRepository | recreate | {e}')
            raise e

    @staticmethod
    def exists(tournamentId: int, teamId: int) -> bool:
        """Check if a participates_in entry exists"""

        return db.session.query(
            db.exists().where(
                participates_in.c.tournament_id == tournamentId,
                participates_in.c.team_id == teamId
            )
        ).scalar()

    @staticmethod
    def isDeleted(tournamentId: int, teamId: int) -> bool:
        """Check if a participates_in entry is deleted"""

        return db.session.query(
            participates_in.c.is_deleted
        ).filter(
            participates_in.c.tournament_id == tournamentId,
            participates_in.c.team_id == teamId
        ).scalar()

    @staticmethod
    def nextFreeRegistrationOrder(tournamentId: int) -> int:
        """Get the next free registration order for a tournament"""

        maxOrder = db.session.query(
            func.max(
                participates_in.c.registration_order
            )
        ).filter(
            participates_in.c.tournament_id == tournamentId,
            participates_in.c.is_deleted == False
        ).scalar()

        if maxOrder is None:
            return 0

        return maxOrder + 1
