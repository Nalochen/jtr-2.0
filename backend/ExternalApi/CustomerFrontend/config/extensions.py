from flask import request
from config.cache import cache


def create_tournament_cache_key() -> str:
    """Create cache key for tournament"""

    tournamentId = request.view_args['tournamentId']

    return f"tournament-{tournamentId}"


def clearTournamentCache(tournamentId: int) -> None:
    """Clear cache for tournament"""

    cache.delete('tournament-overview')

    cache.delete(f'tournament-{tournamentId}')


def clearCompleteTournamentCache() -> None:
    """Clear complete tournament cache"""

    tournamentKeys = cache.cache._read_client.keys('tournament-*')

    [cache.delete(key.decode('utf-8')) for key in tournamentKeys]


def create_team_cache_key() -> str:
    """Create cache key for team"""

    teamId = request.view_args['teamId']

    return f"team-{teamId}"


def clearTeamCache(teamId: int) -> None:
    """Clear cache for team"""

    cache.delete('team-overview')

    cache.delete(f'team-{teamId}')


def clearCompleteTeamCache() -> None:
    """Clear complete team cache"""

    teamKeys = cache.cache._read_client.keys('team-*')

    [cache.delete(key.decode('utf-8')) for key in teamKeys]


def create_user_cache_key() -> str:
    """Create cache key for user"""

    userId = request.view_args['userId']

    return f"user-{userId}"


def clearUserCache(userId: int) -> None:
    """Clear cache for user"""

    cache.delete('user-overview')

    cache.delete(f'user-{userId}')


def clearCompleteUserCache() -> None:
    """Clear complete user cache"""

    userKeys = cache.cache._read_client.keys('user-*')

    [cache.delete(key.decode('utf-8')) for key in userKeys]
