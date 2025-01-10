from flask import g
from flask_jwt_extended import create_access_token
from werkzeug.security import check_password_hash

from BusinessDomain.User.Repository import LoginAttemptRepository, UserRepository
from DataDomain.Database.Enum import LockType
from DataDomain.Model import Response


class LoginUserHandler:
    """Handler to login user"""

    @staticmethod
    def handle() -> Response:

        data = g.validatedData

        username: str | None = data.get('username')
        email: str | None = data.get('email')
        password: str = data.get('password')

        if username is None and email is None:
            return Response(
                response='Benutzername oder Email muss angegeben werden.',
                status=400
            )

        user = UserRepository.getUserByUsernameOrEmail(username, email)

        if user is None:
            return Response(
                response='Falsche Anmeldedaten.',
                status=401
            )

        # Check if user is locked
        if LoginAttemptRepository.isLocked(user.username):
            loginAttemptData = LoginAttemptRepository.checkForFailedAttempts(
                user.username)

            if loginAttemptData.lockType == LockType.TEMPORARILY.value:
                LoginAttemptRepository.increaseFailedAttempts(user.username)

            return Response(
                response={
                    'lockType': loginAttemptData.lockType,
                    'lockedUntil': loginAttemptData.lockedUntil
                },
                status=401
            )

        # Verify password
        if check_password_hash(user.password_hash, password):
            accessToken = create_access_token(
                identity=user.id
            )

            return Response(
                response={
                    'token': accessToken,
                    'language': user.language,
                },
                status=200,
            )

        # Create/Increase failed attempts
        LoginAttemptRepository().createOrIncreaseAttempts(user.username)

        return Response(
            response='Falsche Anmeldedaten.',
            status=401
        )
