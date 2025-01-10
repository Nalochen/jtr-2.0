from flask import g
from flask_jwt_extended import get_jwt_identity

from BusinessDomain.User.Repository import UserRepository
from BusinessDomain.User.Rule.tools import getJwtIdentity
from DataDomain.Model import Response


class GetUserDetailsHandler:
    """Handler for getting user details"""

    @staticmethod
    def handle() -> Response:

        data = g.validatedData

        escapedUsername: str | None = data.get('escapedUsername')

        if escapedUsername is None and get_jwt_identity() is None:
            return Response(
                status=400,
                response='Username or session is required')

        user = getJwtIdentity() if escapedUsername is None \
            else UserRepository.getUserByUsername(escapedUsername)

        profileOfCurrentUser = get_jwt_identity() and (
            getJwtIdentity().id == user.id)

        teams = [{
            'id': team.id,
            'logo': team.logo,
            'name': team.name,
        } for team in user.teams]

        response = {
            'id': user.id,
            'createdAt': user.created_at.isoformat(),
            'email': user.email,
            'isBirthdateVisible': user.birthdate_visibility,
            'isCityVisible': user.city_visibility,
            'isDeleted': user.is_deleted,
            'isNameVisible': user.name_visibility,
            'picture': user.picture,
            'pronouns': user.pronouns,
            'teams': teams,
            'updatedAt': user.updated_at.isoformat(),
            'username': user.username,
        }

        if user.name_visibility or profileOfCurrentUser:
            response['name'] = user.name

        if user.birthdate_visibility or profileOfCurrentUser:
            response['birthdate'] = user.birthdate.isoformat()

        if user.city_visibility or profileOfCurrentUser:
            response['city'] = user.city

        return Response(
            response=response,
            status=200,
        )
