import logging

from sqlalchemy import func

from DataDomain.Database.Model.ParticipatesIn import participates_in
from DataDomain.Database.db import db


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

    @staticmethod
    def create(tournamentId: int, teamId: int) -> None:
        """Create a new participates_in entry"""

        try:
            maxOrder = db.session.query(
                func.max(
                    participates_in.c.registration_order
                )
            ).filter(
                participates_in.c.tournament_id == tournamentId,
                participates_in.c.is_deleted == False
            ).scalar()

            if maxOrder is None:
                maxOrder = 0

            db.session.execute(
                participates_in.insert().values(
                    tournament_id=tournamentId,
                    team_id=teamId,
                    registration_order=maxOrder + 1
                )
            )
            db.session.commit()

        except Exception as e:
            db.session.rollback()
            logging.error(f'ParticipatesInRepository | delete | {e}')
            raise e

    @staticmethod
    def delete(tournamentId: int, teamId: int) -> None:
        """Set is_deleted on participates_in entry to True"""

        try:
            db.session.query(
                participates_in
            ).filter(
                participates_in.c.tournament_id == tournamentId,
                participates_in.c.team_id == teamId
            ).update({
                'is_deleted': True
            })
            db.session.commit()

        except Exception as e:
            db.session.rollback()
            logging.error(f'ParticipatesInRepository | delete | {e}')
            raise e
