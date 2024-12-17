import os
from datetime import timedelta

import pymysql
from flask_cors import CORS


class Config:
    """Configuration class for the Flask app"""

    @staticmethod
    def init_app(app) -> None:
        """Initializes the Flask app with the given configuration"""

        CORS(app)

        pymysql.install_as_MySQLdb()

        app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
        app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

        app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')

        app.config['CACHE_REDIS_HOST'] = os.getenv('CACHE_REDIS_HOST')
        app.config['CACHE_REDIS_PORT'] = os.getenv('CACHE_REDIS_PORT')
        app.config['CACHE_REDIS_DB'] = 0
        app.config['CACHE_DEFAULT_TIMEOUT'] = 300

        app.config['CELERY_BROKER_NAME'] = os.getenv('CELERY_BROKER_NAME')
        app.config['CELERY_BROKER_URL'] = os.getenv('CELERY_BROKER_URL')
        app.config['CELERY_RESULT_BACKEND'] = os.getenv(
            'CELERY_RESULT_BACKEND')

        app.config['JWT_VERIFY_SUB'] = False
        app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(days=30)

        app.config['MAX_CONTENT_LENGTH'] = 4 * 1024 * 1024 # 4MB

        if os.getenv('FLASK_ENV') == 'production':
            app.config['DATABASE_PATH'] = '/app/DataDomain/Database'
            app.config['CACHE_TYPE'] = 'redis'
            app.config['UPLOAD_FOLDER'] = '/app/DataDomain/assets'

        elif os.getenv('FLASK_ENV') == 'testing':
            app.config['DATABASE_PATH'] = 'backend/DataDomain/Database'
            app.config['CACHE_TYPE'] = 'null'
            app.config['UPLOAD_FOLDER'] = 'backend/DataDomain/assets'

        elif os.getenv('FLASK_ENV') == 'development':
            app.config['DATABASE_PATH'] = '/home/backend/DataDomain/Database'
            app.config['CACHE_TYPE'] = 'null'
            app.config['UPLOAD_FOLDER'] = '/home/backend/DataDomain/assets'

            import warnings

            warnings.filterwarnings(
                "ignore",
                message="Flask-Caching: CACHE_TYPE is set to null, caching is effectively disabled.")
