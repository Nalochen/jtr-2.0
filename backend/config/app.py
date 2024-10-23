from flask import Flask

from flask_jwt_extended import JWTManager

from DataDomain.Database.db import db
from ExternalApi.CustomerFrontend.config.routes import customer_frontend
from ExternalApi.System.config.routes import system
from config.config import Config
from config.extensions import cache


def createApp() -> Flask:
    """Creates the Flask app."""

    app = Flask(__name__)
    Config.init_app(app)

    app.register_blueprint(customer_frontend,
                           url_prefix='/api/customer-frontend')
    app.register_blueprint(system, url_prefix='/api/system')

    cache.init_app(app)

    return app


app = createApp()

db.init_app(app)

jwt = JWTManager(app)
