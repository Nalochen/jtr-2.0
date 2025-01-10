from flask import g

from BusinessDomain.User.Rule import (
    IsCurrentUserAdminOfOrganizingTeamRule,
    IsCurrentUserAdminOfTeamRule,
)
from DataDomain.Database.Repository import ParticipatesInRepository
from DataDomain.Model import Response
from Infrastructure.Logger import logger


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

        if (not IsCurrentUserAdminOfTeamRule.applies(teamId)
                and not IsCurrentUserAdminOfOrganizingTeamRule.applies(tournamentId)):
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
