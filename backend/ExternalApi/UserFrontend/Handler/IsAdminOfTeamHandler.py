from flask import g

from BusinessDomain.User.UseCase.QueryHandler import IsAdminOfTeamQueryHandler
from BusinessDomain.User.UseCase.QueryHandler.Query import IsAdminOfTeamQuery
from DataDomain.Model import Response


class IsAdminOfTeamHandler:
    """Handler for getting is user is an admin of a team"""

    @staticmethod
    def handle() -> Response:

        data = g.validated_data

        isAdmin = IsAdminOfTeamQueryHandler.execute(
            IsAdminOfTeamQuery(
                escapedName=data.get('escapedName')
            )
        )

        return Response(
            response=isAdmin,
            status=200,
        )
