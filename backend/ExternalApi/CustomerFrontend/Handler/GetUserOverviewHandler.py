from DataDomain.Database.Repository.UserRepository import UserRepository
from DataDomain.Model.Response import Response


class GetTeamOverviewHandler:
    """Handler for getting User overview"""

    @staticmethod
    def handle() -> Response:
        """Get User overview"""

        user = UserRepository.getUserOverview()

        if user is None:
            return Response(status=404, response='User not found')

        return Response(
            response=user,
            status=200,
        )
