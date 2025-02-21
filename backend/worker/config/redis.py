import os

from redis import Redis

redis = Redis(
    host=os.getenv('CACHE_REDIS_HOST'),
    port=os.getenv('CACHE_REDIS_PORT'),
    db=os.getenv('CACHE_REDIS_DB'))
