from datetime import datetime

from flask import g
from flask_jwt_extended import create_access_token
from werkzeug.security import generate_password_hash

from DataDomain.Database.Model.Users import Users
from DataDomain.Database.Repository.UserRepository import UserRepository
from DataDomain.Model.Response import Response
from config.cache import cache


class CreateUserHandler:
    """Handler for creating a user"""

    @staticmethod
    def handle() -> Response:
        """Create a user and login"""

        data = g.validatedData

        user = Users()

        user.birthdate_visibility = data.get('isBirthdateVisible')
        user.city_visibility = data.get('isCityVisible')
        user.name_visibility = data.get('isNameVisible')
        user.password_hash = generate_password_hash(data.get('password'))
        user.username = data.get('username')

        birthdate = data.get('birthdate')
        if birthdate is not None:
            user.birthdate = datetime.fromisoformat(birthdate)

        city = data.get('city')
        if city is not None:
            user.city = city

        email = data.get('email')
        if email is not None:
            user.email = email

        name = data.get('name')
        if name is not None:
            user.name = name

        try:
            UserRepository.create(user)

            cache.delete('user-overview')

        except Exception:
            return Response(status=500)

        accessToken = create_access_token(
            identity=user.id
        )

        return Response(
            response={
                'token': accessToken,
            },
            status=200
        )
