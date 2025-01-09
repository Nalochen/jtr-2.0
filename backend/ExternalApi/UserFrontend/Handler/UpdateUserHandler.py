from datetime import datetime

from flask import g
from flask_jwt_extended import create_access_token
from werkzeug.security import generate_password_hash

from DataDomain.Database.Repository import UserRepository
from DataDomain.Database.tools import getJwtIdentity
from DataDomain.Model import Response
from ExternalApi.UserFrontend.config.extensions import clearUserCache


class UpdateUserHandler:
    """Handler for updating a user"""

    @staticmethod
    def handle() -> Response:
        """Update a user"""

        data = g.validatedData

        user = getJwtIdentity()

        username = data.get('username')
        if username is not None:
            user.username = username

        password = data.get('password')
        if password is not None:
            user.password_hash = generate_password_hash(password)

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

        pronouns = data.get('pronouns')
        if pronouns is not None:
            user.pronouns = pronouns

        try:
            UserRepository.update(user)

            clearUserCache(user.id)

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
