from flask import g

from DataDomain.Database.Repository.TournamentRepository import TournamentRepository
from DataDomain.Database.Repository.TournamentSubscriptionRepository import (
    TournamentSubscriptionRepository,
)
from DataDomain.Model.Response import Response
from ExternalApi.UserFrontend.Service.CheckForMembershipRoleService import (
    CheckForMembershipRoleService,
)
from Infrastructure.Mail.Tournament.SendTournamentSubscriptionNotificationsMail import (
    SendTournamentSubscriptionNotificationsMail, )


class CreateTournamentNotificationHandler:
    """Handler for creating tournament notifications"""

    @staticmethod
    def handle() -> Response:
        """Create tournament notifications"""

        data = g.validatedData

        tournamentId: int = data.get('tournamentId')
        message: str = data.get('message')

        tournament = TournamentRepository.get(tournamentId)
        if not tournament:
            return Response(status=404)

        if not CheckForMembershipRoleService.isCurrentUserAdminOfOrganizingTeam(
                tournament.id):
            return Response(status=403)

        try:
            recipients = TournamentSubscriptionRepository.getRecipients(
                tournament.id)

            SendTournamentSubscriptionNotificationsMail.send(
                recipients, tournament, message)

        except Exception:
            return Response(status=500)

        return Response(status=200)
