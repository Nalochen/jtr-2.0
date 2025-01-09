import logging
import os

import pymysql
from celery import Celery
from Handler import SendMailHandler
from config import MailConfig
from Model import SendMailTaskBody
from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker

celery = Celery(
    os.getenv('CELERY_APP_NAME'),
    broker=os.getenv('CELERY_BROKER_URL'),
    backend=os.getenv('CELERY_RESULT_BACKEND'))

pymysql.install_as_MySQLdb()

engine = create_engine(
    os.getenv(
        'DATABASE_URL',
        'mysql+pymysql://user:password@localhost:3306/jtr'),
    echo=True)

db = scoped_session(sessionmaker(bind=engine))

celery.conf.update(
    SMTP_HOST=MailConfig.MAIL_SERVER,
    SMTP_PASSWORD=MailConfig.MAIL_PASSWORD,
    SMTP_PORT=MailConfig.MAIL_PORT,
    SMTP_USE_TLS=MailConfig.MAIL_USE_TLS,
    SMTP_USER=MailConfig.MAIL_USERNAME,
)


@celery.task(name="send_email_task")
def send_email_task(data: SendMailTaskBody) -> str:
    """
    Handles the email sending logic. This is the main worker logic
    for processing the email asynchronously.
    """

    try:
        SendMailHandler.handle(data)

        return f'Worker | send_email_task | Email successfully sent to {
            data['recipients']} with subject: {data['body']}'

    except Exception as e:
        logging.info(f'Worker | send_email_task | Failed to send email: {e}')
        raise
