from flask import g

from DataDomain.Database.Repository.ParticipatesInRepository import ParticipatesInRepository
from DataDomain.Model.Response import Response
from ExternalApi.CustomerFrontend.Service.CheckForMembershipRoleService import CheckForMembershipRoleService


class DeleteParticipationHandler:
    """Handler for deleting a delete-participation relation"""

    def __init__(self):
        """Initializes the DeleteParticipationHandler"""

        self.participatesInRepository = ParticipatesInRepository()

    def handle(self) -> Response:
        """Handles the delete-participation route"""

        data = g.validatedData

        teamId: int = data.get('teamId')
        tournamentId: int = data.get('tournamentId')

        if (not CheckForMembershipRoleService.isCurrentUserAdminOfTeam(teamId)
                and not CheckForMembershipRoleService.isCurrentUserAdminOfOrganizingTeam(teamId, tournamentId)):
            return Response(status=403)

        if not self.participatesInRepository.exists(tournamentId, teamId):
            return Response(status=404)

        if self.participatesInRepository.isDeleted(tournamentId, teamId):
            return Response(status=400)

        try:
            self.participatesInRepository.delete(tournamentId, teamId)

        except Exception:
            return Response(status=500)

        return Response(status=200)
