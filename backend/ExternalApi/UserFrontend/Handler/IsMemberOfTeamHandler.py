from flask import g

from BusinessDomain.User.UseCase.QueryHandler import IsMemberOfTeamQueryHandler
from BusinessDomain.User.UseCase.QueryHandler.Query import IsMemberOfTeamQuery
from DataDomain.Model import Response


class IsMemberOfTeamHandler:
    """Handler for getting is user is an admin of a team"""

    @staticmethod
    def handle() -> Response:

        data = g.validated_data

        isMember = IsMemberOfTeamQueryHandler.execute(
            IsMemberOfTeamQuery(
                escapedName=data.get('escapedName')
            )
        )

        return Response(
            response=isMember,
            status=200,
        )
