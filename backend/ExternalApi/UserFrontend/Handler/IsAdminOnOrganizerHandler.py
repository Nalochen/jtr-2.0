from flask import g

from BusinessDomain.User.Rule import IsCurrentUserAdminOfOrganizingTeamRule
from DataDomain.Model import Response


class IsAdminOfOrganizerHandler:
    """Handler for getting is user is an admin of the organizing team"""

    @staticmethod
    def handle() -> Response:
        """Handle the request to check if the user is an admin of the organizing team"""

        data = g.validatedData

        tournamentId: int = data.get('tournamentId')

        isAdmin = IsCurrentUserAdminOfOrganizingTeamRule.applies(
            tournamentId)

        return Response(
            response=isAdmin,
            status=200,
        )
