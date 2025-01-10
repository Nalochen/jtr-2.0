from flask import g

from BusinessDomain.User.UseCase.QueryHandler import IsAdminOfOrganizerQueryHandler
from BusinessDomain.User.UseCase.QueryHandler.Query import IsAdminOfOrganizerQuery
from DataDomain.Model import Response


class IsAdminOfOrganizerHandler:
    """Handler for getting is user is an admin of the organizing team"""

    @staticmethod
    def handle() -> Response:

        data = g.validatedData

        isAdmin = IsAdminOfOrganizerQueryHandler.execute(
            IsAdminOfOrganizerQuery(
                tournamentId=data.get('tournamentId'),
            )
        )

        return Response(
            response=isAdmin,
            status=200,
        )
