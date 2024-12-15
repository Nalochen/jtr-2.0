from typing import List

from worker.Model.SendMailTaskBody import SendMailTaskBody
from worker.tasks import send_mail


class SendSingleMail:
    """Class to send a single mail task to worker"""

    @staticmethod
    def send(
        subject: str,
        recipients: List[str],
        body: str,
        html: str | None = None
    ) -> None:
        """Function to send the mail"""

        send_mail.apply_async(args=[
            SendMailTaskBody(
                subject,
                recipients,
                body,
                html
            ).__dict__
        ])
