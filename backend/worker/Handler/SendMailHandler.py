from flask_mail import Message

from worker.MailConfig import mail
from worker.Model.SendMailTaskBody import SendMailTaskBody
from worker.tasks import logger


class SendMailHandler:
    """Celery task handler for sending mails"""

    @staticmethod
    def handle(data: SendMailTaskBody) -> None:
        """Send mail"""

        subject = data.subject
        recipients = data.recipients
        body = data.body

        try:
            logger.info(f"SendMailHandler | Sending mail to {
                        recipients} with subject {subject}")

            msg = Message(
                subject=subject,
                recipients=recipients,
                body=body
            )

            with mail.state as mailState:
                mail.init_app(mailState)
                mail.send(msg)

            logger.info(f"SendMailHandler | Mail sent to {
                        recipients} with subject {subject}")

        except Exception as e:
            logger.error(f"SendMailHandler | {e}")
