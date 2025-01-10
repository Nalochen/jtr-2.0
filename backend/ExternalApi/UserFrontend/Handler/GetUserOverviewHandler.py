from BusinessDomain.User.Repository import UserRepository
from DataDomain.Model import Response


class GetUserOverviewHandler:
    """Handler for getting user overview"""

    @staticmethod
    def handle() -> Response:

        user = UserRepository.getUserOverview()

        return Response(
            response=user,
            status=200,
        )
