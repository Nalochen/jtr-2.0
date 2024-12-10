from flask_jwt_extended import get_jwt_identity

from DataDomain.Database.Repository.UserRepository import UserRepository
from DataDomain.Database.tools import getJwtIdentity
from DataDomain.Model.Response import Response


class GetUserDetailsHandler:
    """Handler for getting user details"""

    @staticmethod
    def handle(userId: int | None) -> Response:
        """Get user details by id or current user, if user has a session"""

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

        ownProfileOfCurrentUser = (
            get_jwt_identity() and getJwtIdentity().id) == userId

        teams = [{
            'id': team.id,
            'logo': team.logo,
            'name': team.name,
        } for team in user.teams]

        response = {
            'id': user.id,
            'birthdate': user.birthdate.isoformat(),
            'city': user.city,
            'createdAt': user.created_at.isoformat(),
            'isBirthdateVisible': user.birthdate_visibility,
            'isCityVisible': user.city_visibility,
            'isDeleted': user.is_deleted,
            'isNameVisible': user.name_visibility,
            'name': user.name,
            'picture': user.picture,
            'pronouns': user.pronouns,
            'teams': teams,
            'updatedAt': user.updated_at.isoformat(),
            'username': user.username,
        }

        if ownProfileOfCurrentUser:
            response['email'] = user.email
            response['isCityVisible'] = user.city_visibility
            response['isNameVisible'] = user.name_visibility
            response['isBirthdateVisible'] = user.birthdate_visibility

            if user.name_visibility:
                response['name'] = user.name

            if user.birthdate_visibility:
                response['birthdate'] = user.birthdate.isoformat()

            if user.city_visibility:
                response['city'] = user.city

        return Response(
            response=response,
            status=200,
        )
