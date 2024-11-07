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

        user.username = data['username']
        user.password_hash = generate_password_hash(data['password'])

        if 'email' in data:
            user.email = data['email']

        if 'name' in data:
            user.name = data['name']

        if 'birthday' in data:
            user.birthday = data['birthday']

        if 'picture' in data:
            # TODO: Add saving of image

            user.picture = data['picture']

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
