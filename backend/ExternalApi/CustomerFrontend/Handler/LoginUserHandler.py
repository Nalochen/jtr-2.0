from flask import g
from flask_jwt_extended import create_access_token
from werkzeug.security import check_password_hash

from DataDomain.Database.Repository.UserRepository import UserRepository
from DataDomain.Model.Response import Response


class LoginUserHandler:
    """Handler to login user"""

    def __init__(self):
        """Initializes the LoginUserHandler"""

        self.userRepository = UserRepository()

    def handle(self) -> Response:
        """Login user"""

        data = g.validatedData

        username = data.get('username')
        email = data.get('email')
        password = data.get('password')

        if username is None and email is None:
            return Response(
                response='Benutzername oder Email muss angegeben werden',
                status=400
            )

        user = self.userRepository.getUserByUsernameOrEmail(username, email)

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
