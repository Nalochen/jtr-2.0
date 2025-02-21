from BusinessDomain.Tournament.Repository import TournamentRepository
from BusinessDomain.User.Repository import TournamentSubscriptionRepository
from BusinessDomain.User.UseCase.CommandHandler.Command import (
    CreateTournamentNotificationCommand,
)
from Infrastructure.Mail.Tournament import SendTournamentSubscriptionNotificationsMail


class CreateTournamentNotificationCommandHandler:

    @staticmethod
    def execute(command: CreateTournamentNotificationCommand) -> None:

        recipients = TournamentSubscriptionRepository.getRecipients(
            command.tournamentId)

        tournament = TournamentRepository.get(command.tournamentId)

        SendTournamentSubscriptionNotificationsMail.send(
            recipients, tournament, command.message)
