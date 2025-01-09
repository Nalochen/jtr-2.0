from flask import request

from config import cache
from DataDomain.Database.Repository import UserRepository


def create_user_cache_key() -> str | None:
    """Create cache key for user"""

    escapedUsername = request.view_args.get('escapedUsername')

    user = UserRepository.getUserByUsername(escapedUsername)

    if user is None:
        return None

    return f"user-{user.id}"


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
