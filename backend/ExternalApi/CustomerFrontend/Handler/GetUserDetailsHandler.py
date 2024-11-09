from flask_jwt_extended import get_jwt_identity

from DataDomain.Database.Repository.UserRepository import UserRepository
from DataDomain.Database.tools import getJwtIdentity
from DataDomain.Model.Response import Response


class GetUserDetailsHandler:
    """Handler for getting user details"""

    @staticmethod
    def handle(userId: int | None) -> Response:
        """Get user details by id"""

        if userId is None and get_jwt_identity() is None:
            return Response(
                status=400,
                response='userId or session is required')

        if userId is None:
            user = getJwtIdentity()

        else:
            user = UserRepository.get(userId)

            if user is None or user.is_deleted:
                return Response(status=404, response='User not found')

        teams = [{
            'id': team.id,
            'logo': team.logo,
            'name': team.name,
        } for team in user.teams]

        response = {
            'id': user.id,
            'birthday': user.birthday.isoformat(),
            'city': user.city,
            'createdAt': user.created_at.isoformat(),
            'isDeleted': user.is_deleted,
            'name': user.name,
            'picture': user.picture,
            'teams': teams,
            'updatedAt': user.updated_at.isoformat(),
            'username': user.username,
        }

        if userId is None:
            response['email'] = user.email

        return Response(
            response=response,
            status=200,
        )
