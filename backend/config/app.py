from flask import Flask

from flask_jwt_extended import JWTManager

from ExternalApi.CustomerFrontend.config.routes import customer_frontend
from ExternalApi.System.config.routes import system
from config.config import Config
from config.extensions import cache


app = Flask(__name__)
app.config.from_object(Config)

app.register_blueprint(customer_frontend, url_prefix='/api/customer-frontend')
app.register_blueprint(system, url_prefix='/api/system')

Config.init_app(app)

jwt = JWTManager(app)

cache.init_app(app)
