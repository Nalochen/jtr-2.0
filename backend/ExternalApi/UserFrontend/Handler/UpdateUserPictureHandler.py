import base64

from flask import g

from DataDomain.Database.Repository import UserRepository
from DataDomain.Database.tools import getJwtIdentity
from DataDomain.Model import Response
from ExternalApi.UserFrontend.Service.PictureService import PictureService
from ExternalApi.UserFrontend.Service.PictureTypeEnum import PictureTypeEnum


class UpdateUserPictureHandler:
    """Handler for updating a user picture"""

    @staticmethod
    def handle() -> Response:
        """Update a user picture"""

        data = g.validatedData

        pictureData: str = data.get('picture')

        user = getJwtIdentity()

        try:
            decodedData = base64.b64decode(pictureData)

            user.picture = PictureService.savePicture(
                decodedData, PictureTypeEnum.USER)

            UserRepository.update(user)

        except Exception:
            return Response(status=500)

        return Response(
            status=200
        )
