from flask_caching import Cache
from redis import Redis
from celery import Celery


cache = Cache()
redis = Redis(host='localhost', port=6379, db=0)

celery = Celery(
    host='worker',
    broker='amqp://admin:mypass@localhost:5672',
    backend='rpc://')
