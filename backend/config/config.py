import os

import pymysql
from flask_cors import CORS

from DataDomain.Database.db import db


class Config(object):
    @staticmethod
    def init_app(app):
        CORS(app)

        pymysql.install_as_MySQLdb()

        app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
        # app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

        db.init_app(app)

        with app.app_context():
            db.create_all()

        app.config['secret_key'] = 'secret key'

        app.config['CACHE_TYPE'] = 'redis'
        app.config['CACHE_REDIS_HOST'] = 'redis'
        app.config['CACHE_REDIS_PORT'] = 6379
        app.config['CACHE_REDIS_DB'] = 0
        app.config['CACHE_DEFAULT_TIMEOUT'] = 300

        app.config['CELERY_BROKER_URL'] = os.getenv('CELERY_BROKER_URL')
        app.config['CELERY_RESULT_BACKEND'] = 'rpc://'
