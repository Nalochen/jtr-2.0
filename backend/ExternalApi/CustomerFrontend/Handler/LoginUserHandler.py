from flask import g
from flask_jwt_extended import create_access_token
from werkzeug.security import check_password_hash

from DataDomain.Database.Model.Users import Users
from DataDomain.Model.Response import Response


class LoginUserHandler:
    """Handler to login user"""

    @staticmethod
    def handle() -> Response:
        """Login user"""

        data = g.validatedData

        username = data['username']
        password = data['password']

        user = Users.query.filter(
            Users.username == username
        ).first()

        if user and check_password_hash(user.password_hash, password):
            accessToken = create_access_token(
                identity={'username': user.username}
            )

            return Response(
                response={
                    'token': accessToken,
                },
                status=200,
            )

        return Response(
            response='Falscher Benutzername oder Passwort',
            status=401,
        )
