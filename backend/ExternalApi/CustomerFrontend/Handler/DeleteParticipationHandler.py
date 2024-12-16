from flask import g

from DataDomain.Database.Repository.ParticipatesInRepository import ParticipatesInRepository
from DataDomain.Model.Response import Response
from ExternalApi.CustomerFrontend.Service.CheckForMembershipRoleService import CheckForMembershipRoleService
from Infrastructure.Logger.Logger import logger


class DeleteParticipationHandler:
    """Handler for deleting a participate_in relation"""

    @staticmethod
    def handle() -> Response:
        """Handles the delete-participation route"""

        data = g.validatedData

        teamId: int = data.get('teamId')
        tournamentId: int = data.get('tournamentId')

        logger.info(f"Delete participation of team {
                    teamId} to tournament {tournamentId}")

        if (not CheckForMembershipRoleService.isCurrentUserAdminOfTeam(teamId)
                and not CheckForMembershipRoleService.isCurrentUserAdminOfOrganizingTeam(tournamentId)):
            return Response(status=403)

        if not ParticipatesInRepository.exists(tournamentId, teamId):
            return Response(status=404)

        if ParticipatesInRepository.isDeleted(tournamentId, teamId):
            return Response(status=400)

        try:
            ParticipatesInRepository.delete(tournamentId, teamId)

        except Exception:
            return Response(status=500)

        return Response(status=200)
