from flask import request
from config.extensions import cache


def create_tournament_cache_key() -> str:
    """Create cache key for tournament"""

    tournamentId = request.view_args['tournamentId']

    return f"tournament-{tournamentId}"


def clearTournamentCache() -> None:
    """Clear cache"""

    cache.delete('upcoming-tournaments')

    tournament_keys = cache.cache._read_client.keys('tournament-*')

    [cache.delete(key.decode('utf-8')) for key in tournament_keys]
