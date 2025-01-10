from DataDomain.Database.Model import Users
from Infrastructure.Mail import SendSingleMail


class SendUserLockedMail:
    """Class to send a mail to a user that his account is locked"""

    def send(self, user: Users) -> None:
        emailBody = self.createEmailBody(user)

        SendSingleMail.send(
            subject='Your account has been locked',
            recipients=[user.email],
            body=emailBody
        )

    @staticmethod
    def createEmailBody(user: Users) -> str:
        # TODO: Create email template
        return 'Funktion noch implementieren'
