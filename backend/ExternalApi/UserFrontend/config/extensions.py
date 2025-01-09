from flask import request

from config import cache


def create_user_cache_key() -> str | None:
    """Create cache key for user"""

    userId = request.view_args.get('userId')

    if userId is None:
        return None

    return f"user-{userId}"


def create_user_picture_cache_key() -> str | None:
    """Create cache key for user"""

    userId = request.view_args.get('userId')

    if userId is None:
        return None

    return f"user-picture-{userId}"


def clearUserCache(userId: int) -> None:
    """Clear cache for user"""

    cache.delete('user-overview')

    cache.delete(f'user-{userId}')


def clearCompleteUserCache() -> None:
    """Clear complete user cache"""

    userKeys = cache.cache._read_client.keys('user-*')

    [cache.delete(key.decode('utf-8')) for key in userKeys]
