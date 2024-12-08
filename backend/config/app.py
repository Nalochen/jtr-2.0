from celery import Celery
from flask import Flask

from flask_jwt_extended import JWTManager
from flask_migrate import Migrate
from redis import Redis

from DataDomain.Database.db import db
from ExternalApi.CustomerFrontend.config.routes import customer_frontend
from ExternalApi.System.config.routes import system
from config.cache import cache
from config.config import Config
from config.limiter import limiter


def createApp() -> Flask:
    """Creates the Flask app"""

    app = Flask(__name__)
    Config.init_app(app)

    app.register_blueprint(customer_frontend,
                           url_prefix='/api/customer-frontend')
    app.register_blueprint(system, url_prefix='/api/system')

    cache.init_app(app)

    db.init_app(app)

    Migrate(app, db, directory=app.config['MIGRATION_DIR'])

    return app


app = createApp()

jwt = JWTManager(app)

redis = Redis(
    host=app.config['CACHE_REDIS_HOST'],
    port=app.config['CACHE_REDIS_PORT'],
    db=app.config['CACHE_REDIS_DB'])

celery = Celery(
    host=app.config['CELERY_BROKER_NAME'],
    broker=app.config['CELERY_BROKER_URL'],
    backend=app.config['CELERY_RESULT_BACKEND'])

limiter.init_app(app)
