from flask import g
from werkzeug.security import generate_password_hash

from BusinessDomain.User.Repository import UserRepository
from DataDomain.Model import Response
from Infrastructure.Mail.User import SendPasswordResetSuccessMail


class CreateNewPasswordHandler:
    """Handler for creating a new passwort"""

    @staticmethod
    def handle() -> Response:

        data = g.validatedData

        hash: str = data.get('hash')
        password: str = data.get('password')

        user = UserRepository.checkPasswordResetHash(hash)

        if not user:
            return Response(
                status=400
            )

        try:
            UserRepository.updatePasswordAndClearPasswordResetHash(
                user.id,
                generate_password_hash(password)
            )

            SendPasswordResetSuccessMail().send(
                user=user
            )

        except Exception:
            return Response(status=500)

        return Response(
            status=200
        )
