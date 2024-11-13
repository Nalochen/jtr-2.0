from flask import g

from DataDomain.Database.Repository.TeamRepository import TeamRepository
from DataDomain.Model.Response import Response
from ExternalApi.CustomerFrontend.Service.CheckForIsPartOfRoleService import CheckForIsPartOfRoleService


class DeleteTeamHandler:
    """Handler for deleting a team"""

    @staticmethod
    def handle() -> Response:
        """Handles the delete-team route"""

        data = g.validatedData

        teamId = data.get('teamId')

        team = TeamRepository.get(
            teamId=teamId
        )
        if not team:
            return Response(status=404)

        if not CheckForIsPartOfRoleService.isCurrentUserAdminOfTeam(teamId):
            return Response(status=403)

        try:
            TeamRepository.delete(teamId=teamId)

        except Exception:
            return Response(status=500)

        return Response(status=200)
