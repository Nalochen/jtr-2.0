from flask import request

from BusinessDomain.Team.Repository import TeamRepository
from config import cache


def create_team_cache_key() -> str:
    """Create cache key for team"""

    escapedName = request.view_args.get('escapedName')

    teamId = TeamRepository.getTeamIdByEscapedName(escapedName)

    return f"team-{teamId}"


def clearTeamCache(teamId: int) -> None:
    """Clear cache for team"""

    cache.delete('team-overview')

    cache.delete(f'team-{teamId}')


def clearCompleteTeamCache() -> None:
    """Clear complete team cache"""

    teamKeys = cache.cache._read_client.keys('team-*')

    [cache.delete(key.decode('utf-8')) for key in teamKeys]


def create_team_historic_points_cache_key() -> str:
    """Create cache key for historic team points"""

    teamId = request.view_args.get('teamId')

    return f"team-historic-points-{teamId}"


def clearTeamHistoricPointsCache(teamId: int) -> None:
    """Clear cache for historic team points"""

    cache.delete(f'team-historic-points-{teamId}')
