from flask import g, send_from_directory

from BusinessDomain.User.UseCase.QueryHandler import GetUserPictureQueryHandler
from BusinessDomain.User.UseCase.QueryHandler.Query import GetUserPictureQuery
from DataDomain.Model import Response


class GetUserPictureHandler:
    """Handler for getting user picture"""

    @staticmethod
    def handle() -> Response:

        data = g.validatedData

        uploadFolder, picture = GetUserPictureQueryHandler.execute(
            GetUserPictureQuery(
                userId=data.get('userId')
            )
        )

        if not picture:
            return Response(
                status=404,
                message='No picture found'
            )

        return send_from_directory(
            uploadFolder, picture
        )
