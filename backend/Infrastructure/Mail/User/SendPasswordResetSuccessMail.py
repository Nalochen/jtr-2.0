from DataDomain.Database.Model import Users
from Infrastructure.Mail.SendSingleMail import SendSingleMail


class SendPasswordResetSuccessMail:
    """Email a user about a password reset success."""

    def send(self, user: Users) -> None:
        emailBody = self.createEmailBody(user)

        SendSingleMail.send(
            subject='Reset password success',
            recipients=[user.email],
            body=emailBody
        )

    @staticmethod
    def createEmailBody(user: Users) -> str:
        # TODO: Create email template
        return 'Funktion noch implementieren'
