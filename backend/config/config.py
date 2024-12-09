import os

import pymysql
from flask_cors import CORS


class Config:
    """Configuration class for the Flask app"""

    @staticmethod
    def init_app(app):
        """Initializes the Flask app with the given configuration"""

        CORS(app)

        pymysql.install_as_MySQLdb()

        app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
        app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

        app.config['MIGRATION_DIR'] = '/home/backend/DataDomain/Database/Migration' if os.getenv(
            'FLASK_ENV') == 'development' else '/app/DataDomain/Database/Migration'
        app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')

        app.config['CACHE_TYPE'] = 'redis'
        app.config['CACHE_REDIS_HOST'] = os.getenv('CACHE_REDIS_HOST')
        app.config['CACHE_REDIS_PORT'] = os.getenv('CACHE_REDIS_PORT')
        app.config['CACHE_REDIS_DB'] = 0
        app.config['CACHE_DEFAULT_TIMEOUT'] = 300

        app.config['CELERY_BROKER_NAME'] = os.getenv('CELERY_BROKER_NAME')
        app.config['CELERY_BROKER_URL'] = os.getenv('CELERY_BROKER_URL')
        app.config['CELERY_RESULT_BACKEND'] = os.getenv(
            'CELERY_RESULT_BACKEND')
