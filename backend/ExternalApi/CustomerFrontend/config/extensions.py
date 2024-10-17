from flask import request


def create_tournament_cache_key() -> str:
    """Create cache key for tournament."""

    tournamentId = request.view_args['tournamentId']

    return f"tournament-{tournamentId}"
