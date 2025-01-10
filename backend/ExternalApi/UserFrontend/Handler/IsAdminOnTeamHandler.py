from flask import g

from BusinessDomain.User.Rule import IsCurrentUserAdminOfTeamRule
from DataDomain.Model import Response


class IsAdminOfTeamHandler:
    """Handler for getting is user is an admin of a team"""

    @staticmethod
    def handle() -> Response:

        data = g.validatedData

        teamId: int = data.get('teamId')

        isAdmin = IsCurrentUserAdminOfTeamRule.applies(
            teamId)

        return Response(
            response=isAdmin,
            status=200,
        )
