from flask import Flask

from flask_jwt_extended import JWTManager

from ExternalApi.Routes.routes import api
from BusinessDomain.tools.extensions import cache
from config import Config

app = Flask(__name__)
app.config.from_object(Config)

app.register_blueprint(api, url_prefix='/api')

Config.init_app(app)

jwt = JWTManager(app)

cache.init_app(app)
