import os

from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker
import pymysql

from celery import Celery

from .Handler.SendMailHandler import SendMailHandler
from .Model.SendMailTaskBody import SendMailTaskBody


celery = Celery(
    os.getenv('CELERY_APP_NAME'),
    broker=os.getenv('CELERY_BROKER_URL', 'amqp://guest:guest@localhost:5672'),
    backend=os.getenv('CELERY_RESULT_BACKEND', 'rpc://'))

pymysql.install_as_MySQLdb()

engine = create_engine(
    os.getenv(
        'DATABASE_URL',
        'mysql+pymysql://user:password@localhost:3307/jtr'),
    echo=True)

db = scoped_session(sessionmaker(bind=engine))


@celery.task
def send_mail(data: SendMailTaskBody) -> None:
    return SendMailHandler.handle(data)
