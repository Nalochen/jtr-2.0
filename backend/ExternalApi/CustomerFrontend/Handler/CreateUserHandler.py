from flask import g
from flask_jwt_extended import create_access_token
from werkzeug.security import generate_password_hash

from DataDomain.Database.Model.Users import Users
from DataDomain.Database.Repository.UserResponsitory import UserRepository
from DataDomain.Model.Response import Response


class CreateUserHandler:
    """Handler for creating a user"""

    @staticmethod
    def handle() -> Response:
        """Create a user and login"""

        data = g.validatedData

        user = Users()

        user.username = data.get('username')
        user.password_hash = generate_password_hash(data.get('password'))

        birthday = data.get('birthday')
        if birthday is not None:
            user.birthday = birthday

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
            UserRepository().createUser(user)

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
