from BusinessDomain.User.UseCase.QueryHandler import GetUserOverviewQueryHandler
from DataDomain.Model import Response


class GetUserOverviewHandler:
    """Handler for getting user overview"""

    @staticmethod
    def handle() -> Response:

        users = GetUserOverviewQueryHandler.execute()

        return Response(
            response=users,
            status=200,
        )
