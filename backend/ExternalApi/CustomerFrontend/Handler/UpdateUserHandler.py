from datetime import datetime

from flask import g
from flask_jwt_extended import create_access_token
from werkzeug.security import generate_password_hash

from DataDomain.Database.Repository.UserRepository import UserRepository
from DataDomain.Database.tools import getJwtIdentity
from DataDomain.Model.Response import Response


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

        birthday = data.get('birthday')
        if birthday is not None:
            user.birthday = datetime.fromisoformat(birthday)

        city = data.get('city')
        if city is not None:
            user.city = city

        email = data.get('email')
        if email is not None:
            user.email = email

        name = data.get('name')
        if name is not None:
            user.name = name

        picture = data.get('picture')
        if picture is not None:
            # TODO: Add saving of image

            user.picture = picture

        try:
            UserRepository().update(user)

        except Exception:
            return Response(status=500)

        accessToken = create_access_token(
            identity={'username': user.username}
        )

        return Response(
            response={
                'token': accessToken,
            },
            status=200
        )
