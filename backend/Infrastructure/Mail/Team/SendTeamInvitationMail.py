from DataDomain.Database.Model import Users
from Infrastructure.Mail.SendSingleMail import SendSingleMail


class SendTeamInvitationMail:
    """Email a user about a new team invitation."""

    def send(self, user: Users, hash: str) -> None:

        emailBody = self.createEmailBody(user, hash)

        SendSingleMail.send(
            subject='Neue Einladung zu einem Team',
            recipients=[user.email],
            body=emailBody
        )

    @staticmethod
    def createEmailBody(user: Users, hash: str) -> str:
        # TODO: Create email template
        return 'Funktion noch implementieren'
