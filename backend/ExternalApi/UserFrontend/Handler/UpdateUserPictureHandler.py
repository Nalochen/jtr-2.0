from flask import g

from BusinessDomain.User.UseCase.CommandHandler import UpdateUserPictureCommandHandler
from BusinessDomain.User.UseCase.CommandHandler.Command import UpdateUserPictureCommand
from DataDomain.Model import Response


class UpdateUserPictureHandler:
    """Handler for updating a user picture"""

    @staticmethod
    def handle() -> Response:

        data = g.validatedData

        try:
            filepath = UpdateUserPictureCommandHandler.execute(
                UpdateUserPictureCommand(
                    pictureData=data.get('picture')
                )
            )

        except Exception:
            return Response(status=500)

        return Response(
            response={
                'picture': filepath
            },
            status=200
        )
