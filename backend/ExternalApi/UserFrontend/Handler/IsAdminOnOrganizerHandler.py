from flask import g

from DataDomain.Model.Response import Response
from ExternalApi.UserFrontend.Service.CheckForMembershipRoleService import (
    CheckForMembershipRoleService,
)


class IsAdminOfOrganizerHandler:
    """Handler for getting is user is an admin of the organizing team"""

    @staticmethod
    def handle() -> Response:
        """Handle the request to check if the user is an admin of the organizing team"""

        data = g.validatedData

        tournamentId: int = data.get('tournamentId')

        isAdmin = CheckForMembershipRoleService.isCurrentUserAdminOfOrganizingTeam(
            tournamentId)

        return Response(
            response=isAdmin,
            status=200,
        )
