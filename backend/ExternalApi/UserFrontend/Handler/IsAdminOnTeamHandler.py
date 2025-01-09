from flask import g

from DataDomain.Model import Response
from ExternalApi.UserFrontend.Service.CheckForMembershipRoleService import (
    CheckForMembershipRoleService,
)


class IsAdminOfTeamHandler:
    """Handler for getting is user is an admin of a team"""

    @staticmethod
    def handle() -> Response:
        """Handle the request to check if the user is an admin of a team"""

        data = g.validatedData

        teamId: int = data.get('teamId')

        isAdmin = CheckForMembershipRoleService.isCurrentUserAdminOfTeam(
            teamId)

        return Response(
            response=isAdmin,
            status=200,
        )
