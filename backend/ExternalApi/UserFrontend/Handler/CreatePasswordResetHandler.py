from datetime import datetime

from flask import g
from flask_jwt_extended import create_access_token
from werkzeug.security import generate_password_hash

from DataDomain.Database.Model.Users import Users
from DataDomain.Database.Repository.UserRepository import UserRepository
from DataDomain.Model.Response import Response
from Infrastructure.Mail.User.SendPasswordResetMail import SendPasswordResetMail
from config.cache import cache


class CreatePasswordResetHandler:
    """Handler for creating a passwort reset request"""

    @staticmethod
    def handle() -> Response:
        """Create a password reset request"""

        data = g.validatedData

        email: str = data.get('email')

        user = UserRepository.getByEmail(email)

        if not user:
            return Response(
                status=404
            )

        try:
            hash = UserRepository.createPasswordResetHash(user.id)

            SendPasswordResetMail().send(
                user=user,
                hash=hash
            )

        except Exception:
            return Response(status=500)

        return Response(
            status=200
        )
