from datetime import datetime

from flask import g
from flask_jwt_extended import create_access_token
from werkzeug.security import generate_password_hash

from BusinessDomain.User.Repository import UserRepository
from config import cache
from DataDomain.Database.Model import Users
from DataDomain.Model import Response


class CreateUserHandler:
    """Handler for creating a user"""

    @staticmethod
    def handle() -> Response:

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

        user.city = data.get('city')
        user.email = data.get('email')
        user.name = data.get('name')
        user.language = data.get('language')

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
