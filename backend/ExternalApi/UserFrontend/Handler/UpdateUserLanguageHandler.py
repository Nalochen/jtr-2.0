from flask import g

from BusinessDomain.User.Rule.tools import getJwtIdentity
from BusinessDomain.User.UseCase.CommandHandler import UpdateUserLanguageCommandHandler
from BusinessDomain.User.UseCase.CommandHandler.Command import UpdateUserLanguageCommand
from DataDomain.Model import Response


class UpdateUserLanguageHandler:

    @staticmethod
    def handle() -> Response:

        data = g.validatedData

        try:
            UpdateUserLanguageCommandHandler.execute(
                UpdateUserLanguageCommand(
                    userId=getJwtIdentity().id,
                    language=data.get('language')
                )
            )

        except Exception as e:
            return Response(status=500, response=str(e))

        return Response(
            status=200
        )
