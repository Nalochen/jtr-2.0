from DataDomain.Database.Repository.UserRepository import UserRepository
from DataDomain.Database.tools import getJwtIdentity
from DataDomain.Model.Response import Response


class DeleteUserHandler:
    """Handler for deleting an user"""

    @staticmethod
    def handle() -> Response:
        """Handles the delete-user route"""

        currentUser = getJwtIdentity()

        if currentUser.is_deleted:
            return Response(status=404)

        try:
            UserRepository.delete(currentUser.id)

        except Exception:
            return Response(status=500)

        return Response(status=200)
