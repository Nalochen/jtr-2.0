from flask import g

from DataDomain.Database.Repository.ParticipatesInRepository import ParticipatesInRepository
from DataDomain.Model.Response import Response
from ExternalApi.CustomerFrontend.Service.CheckForIsPartOfRoleService import CheckForIsPartOfRoleService


class DeleteParticipatesInHandler:
    """Handler for deleting a participates-in relation"""

    @staticmethod
    def handle() -> Response:
        """Handles the delete-participates-in route"""

        data = g.validatedData

        teamId = data.get('teamId')
        tournamentId = data.get('tournamentId')

        participatesIn = ParticipatesInRepository.get(
            tournamentId=tournamentId,
            teamId=teamId
        )
        if not participatesIn:
            return Response(status=404)

        if not CheckForIsPartOfRoleService.isCurrentUserAdminOfTeam(teamId):
            return Response(status=403)

        try:
            ParticipatesInRepository.delete(
                tournamentId=tournamentId, teamId=teamId)

        except Exception:
            return Response(status=500)

        return Response(status=200)
