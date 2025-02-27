from DataDomain.Database.Model import Tournaments, Users
from Infrastructure.Mail import SendSingleMail


class SendTournamentSubscriptionNotificationMail:
    """Email a user about a tournament update."""

    def send(self, user: Users, tournament: Tournaments, message: str) -> None:

        emailBody = self.createEmailBody(user, tournament, message)

        SendSingleMail.send(
            subject='Update zu einem abonnierten Turnier',
            recipients=[user.email],
            body=emailBody
        )

    @staticmethod
    def createEmailBody(
            user: Users,
            tournament: Tournaments,
            message: str) -> str:
        # TODO: Create email template
        return 'Funktion noch implementieren'
