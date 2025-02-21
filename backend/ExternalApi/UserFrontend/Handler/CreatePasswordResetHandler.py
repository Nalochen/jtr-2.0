from flask import g

from BusinessDomain.User.Repository import UserRepository
from BusinessDomain.User.UseCase.CommandHandler import (
    CreatePasswordResetHashCommandHandler,
)
from BusinessDomain.User.UseCase.CommandHandler.Command import (
    CreatePasswordResetHashCommand,
)
from DataDomain.Model import Response


class CreatePasswordResetHandler:
    """Handler for creating a passwort reset request"""

    @staticmethod
    def handle() -> Response:

        data = g.validated_data

        email: str = data.get('email')

        user = UserRepository.getByEmail(email)

        if not user:
            return Response(
                status=404
            )

        try:
            CreatePasswordResetHashCommandHandler.execute(
                CreatePasswordResetHashCommand(
                    email=email
                )
            )

        except Exception as e:
            return Response(status=500, response=str(e))

        return Response(
            status=200
        )
