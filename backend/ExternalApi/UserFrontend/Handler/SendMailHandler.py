from DataDomain.Model.Response import Response
from Infrastructure.Mail.SendSingleMail import SendSingleMail


class SendMailHandler:
    """Handler to login user"""

    @staticmethod
    def handle() -> Response:
        """Login user"""

        SendSingleMail.send(
            subject="Test",
            recipients=["slotosch.leander@outlook.de"],
            body="Test"
        )

        return Response(
            status=200
        )
