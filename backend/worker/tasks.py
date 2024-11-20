import os

from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker
import pymysql

from celery import Celery
from celery.utils.log import get_task_logger

logger = get_task_logger(__name__)

app = Celery(
    os.getenv('CELERY_APP_NAME'),
    broker=os.getenv('CELERY_BROKER_URL'),
    backend=os.getenv('CELERY_RESULT_BACKEND'))

pymysql.install_as_MySQLdb()

engine = create_engine(
    os.getenv('DATABASE_URL'),
    echo=True)

db = scoped_session(sessionmaker(bind=engine))
