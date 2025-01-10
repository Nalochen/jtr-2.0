from BusinessDomain.User.Repository import UserRepository
from BusinessDomain.User.Rule.tools import getJwtIdentity
from DataDomain.Model import Response


class DeleteUserHandler:
    """Handler for deleting an user"""

    @staticmethod
    def handle() -> Response:

        currentUser = getJwtIdentity()

        if currentUser.is_deleted:
            return Response(status=404)

        try:
            UserRepository.delete(currentUser.id)

        except Exception:
            return Response(status=500)

        return Response(status=200)
