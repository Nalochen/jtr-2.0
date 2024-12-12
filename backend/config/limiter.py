import os

from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

from config.DummyLimiter import DummyLimiter

limiter = Limiter(
    key_func=get_remote_address,
    storage_uri=f'redis://{
        os.getenv('CACHE_REDIS_HOST')}:{
            os.getenv('CACHE_REDIS_PORT')}/0',
)

if os.getenv('FLASK_ENV') == 'production':
    limiter['customer_frontend'].limit('1000 per day')

elif os.getenv('FLASK_ENV') == 'development':
    limiter = DummyLimiter()
