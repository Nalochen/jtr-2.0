from datetime import datetime

from DataDomain.Database import db
from DataDomain.Database.Model import HistoricTeamPoints
from Infrastructure.Logger import logger


class HistoricTeamPointsRepository:

    @staticmethod
    def create(teamId: int, points: float, date: datetime) -> None:
        """Create a new historic_team_points entry"""

        try:
            historicTeamPoints = HistoricTeamPoints()

            historicTeamPoints.team_id = teamId
            historicTeamPoints.points = points
            historicTeamPoints.date = date

            db.session.add(historicTeamPoints)
            db.session.commit()

            logger.info(
                f'HistoricTeamPointsRepository | create | Created historic_team_points entry for team {teamId}')

        except Exception as e:
            db.session.rollback()
            logger.error(f'HistoricTeamPointsRepository | create | {e}')
            raise e
