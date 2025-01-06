from DataDomain.Database.Model.Tournaments import Tournaments
from DataDomain.Database.Model.Users import Users
from Infrastructure.Mail.SendSingleMail import SendSingleMail


class SendTournamentSubscriptionNotificationMail:

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
