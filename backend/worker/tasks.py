from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker
import pymysql

from celery import Celery
from celery.utils.log import get_task_logger

logger = get_task_logger(__name__)

app = Celery(
    'tasks',
    broker='amqp://admin:mypass@rabbitmq:5672',
    backend='rpc://')

pymysql.install_as_MySQLdb()
engine = create_engine('mysql+pymysql://user:password@mysql/jtr', echo=True)
db = scoped_session(sessionmaker(bind=engine))


@app.task()
def create_item(data):
    return f'Item added successfully {data}'
