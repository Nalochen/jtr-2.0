from worker.config import redis


def clearTeamHistoricPointsCache(teamId: int) -> None:
    """Clear cache for historic team points"""

    redis.delete(f'team-historic-points-{teamId}')
