from flask import g

from DataDomain.Database.Repository import UserRepository
from DataDomain.Model import Response
from Infrastructure.Mail.User import SendPasswordResetMail


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
