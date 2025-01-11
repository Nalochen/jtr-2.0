from flask import g
from flask_jwt_extended import get_jwt_identity

from BusinessDomain.User.UseCase.CommandHandler import UpdateUserCommandHandler
from BusinessDomain.User.UseCase.CommandHandler.Command import UpdateUserCommand
from DataDomain.Model import Response
from ExternalApi.UserFrontend.config.extensions import clearUserCache


class UpdateUserHandler:
    """Handler for updating a user"""

    @staticmethod
    def handle() -> Response:

        data = g.validatedData

        try:
            accessToken = UpdateUserCommandHandler.execute(
                UpdateUserCommand(
                    username=data.get('username'),
                    password=data.get('password'),
                    birthdate=data.get('birthdate'),
                    city=data.get('city'),
                    email=data.get('email'),
                    name=data.get('name'),
                    pronouns=data.get('pronouns')
                )
            )

            clearUserCache(get_jwt_identity())

        except Exception:
            return Response(status=500)

        return Response(
            response={
                'token': accessToken,
            },
            status=200
        )
