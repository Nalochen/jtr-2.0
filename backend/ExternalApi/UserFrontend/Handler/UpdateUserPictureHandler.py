import base64

from flask import g

from BusinessDomain.Common.Enum import PictureTypeEnum
from BusinessDomain.Common.Service import PictureService
from BusinessDomain.User.Repository import UserRepository
from BusinessDomain.User.Rule.tools import getJwtIdentity
from DataDomain.Model import Response


class UpdateUserPictureHandler:
    """Handler for updating a user picture"""

    @staticmethod
    def handle() -> Response:

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
