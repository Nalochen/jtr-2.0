from typing import List

from DataDomain.Database.Model.Tournaments import Tournaments
from DataDomain.Database.Model.Users import Users
from Infrastructure.Mail.Tournament.SendTournamentSubscriptionNotificationMail import \
    SendTournamentSubscriptionNotificationMail


class SendTournamentSubscriptionNotificationsMail:

    @staticmethod
    def send(
            users: List[Users],
            tournament: Tournaments,
            message: str) -> None:

        [SendTournamentSubscriptionNotificationMail().send(user, tournament, message)
         for user in users]
