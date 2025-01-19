import logging
import os

from celery import Celery

from worker.config import MailConfig
from worker.Handler import CalculateTeamScoresHandler, SendMailHandler
from worker.Model import SendMailTaskBody

celery = Celery(
    main=os.getenv('CELERY_APP_NAME'),
    broker=os.getenv('CELERY_WORKER_URL'),
    backend=os.getenv('CELERY_RESULT_BACKEND'))

celery.conf.update(
    SMTP_HOST=MailConfig.MAIL_SERVER,
    SMTP_PASSWORD=MailConfig.MAIL_PASSWORD,
    SMTP_PORT=MailConfig.MAIL_PORT,
    SMTP_USE_TLS=MailConfig.MAIL_USE_TLS,
    SMTP_USER=MailConfig.MAIL_USERNAME,
)


@celery.task(name="send_email_task")
def send_email_task(data: dict) -> None:
    """
    Handles the email sending logic. This is the main worker logic
    for processing the email asynchronously.
    """

    try:
        data = SendMailTaskBody.fromDict(data)

        SendMailHandler.handle(data)

        logging.info(f'Worker | send_email_task | Email successfully sent to {
            data.recipients} with subject: {data.body}')

    except Exception as e:
        logging.error(f'Worker | send_email_task | Failed to send email: {e}')
        raise


@celery.task(name="calculate_team_scores_task")
def calculate_team_scores_task() -> None:
    """
    Handles the team score calculation logic. This is the main worker logic
    for processing the team score asynchronously.
    """

    try:
        logging.info(
            f'Worker | calculate_team_scores_task | Start calculating new Team scores')

        CalculateTeamScoresHandler().handle()

        logging.info(
            f'Worker | calculate_team_scores_task | Finished calculating new Team scores calculated ')

    except Exception as e:
        logging.error(
            f'Worker | calculate_team_scores_task | Failed to calculate team score: {e}')
        raise
