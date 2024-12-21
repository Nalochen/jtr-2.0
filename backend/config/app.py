import os

from flask import Flask

from flask_jwt_extended import JWTManager
from flask_migrate import Migrate
from flask_talisman import Talisman
from redis import Redis

from DataDomain.Database.db import db
from ExternalApi.TeamFrontend.config.routes import team_frontend
from ExternalApi.TournamentFrontend.config.routes import tournament_frontend
from ExternalApi.UserFrontend.config.routes import user_frontend
from ExternalApi.System.config.routes import system
from config.cache import cache
from config.config import Config
from config.limiter import limiter


def createApp() -> Flask:
    """Creates the Flask app"""

    app = Flask(__name__)
    Config.init_app(app)

    app.register_blueprint(team_frontend,
                           url_prefix='/api/team-frontend')
    app.register_blueprint(tournament_frontend,
                           url_prefix='/api/tournament-frontend')
    app.register_blueprint(user_frontend,
                           url_prefix='/api/user-frontend')
    app.register_blueprint(system, url_prefix='/api/system')

    cache.init_app(app)

    db.init_app(app)

    Migrate(
        app,
        db,
        directory=os.path.join(
            app.config['DATABASE_PATH'],
            'Migration'))

    Talisman(app, content_security_policy={
        'default-src': ["'self'"],
        'script-src': ["'self'", "'unsafe-inline'"],
        'style-src': ["'self'", "'unsafe-inline'"],
        'img-src': ["'self'"],
    })

    return app


app = createApp()

jwt = JWTManager(app)

redis = Redis(
    host=app.config['CACHE_REDIS_HOST'],
    port=app.config['CACHE_REDIS_PORT'],
    db=app.config['CACHE_REDIS_DB'])

limiter.init_app(app)
