from DataDomain.Database.Model.Users import Users
from Infrastructure.Mail.SendSingleMail import SendSingleMail


class SendPasswordResetMail:
    """Email a user about a password reset request."""

    def send(self, user: Users, hash: str) -> None:
        emailBody = self.createEmailBody(user, hash)

        SendSingleMail.send(
            subject='Reset password',
            recipients=[user.email],
            body=emailBody
        )

    @staticmethod
    def createEmailBody(user: Users, hash: str) -> str:
        # TODO: Create email template
        return 'Funktion noch implementieren'
