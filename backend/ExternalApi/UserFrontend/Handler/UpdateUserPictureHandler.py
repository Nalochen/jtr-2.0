import base64

from flask import g
from DataDomain.Database.Repository.UserRepository import UserRepository
from DataDomain.Database.tools import getJwtIdentity
from DataDomain.Model.Response import Response
from ExternalApi.UserFrontend.Service.PictureService import PictureService


class UpdateUserPictureHandler:
    """Handler for updating a user picture"""

    def handle(self) -> Response:
        """Update a user picture"""

        data = g.validatedData

        user = getJwtIdentity()

        try:
            pictureData = data.get('picture')
            decodedData = base64.b64decode(pictureData)

            filename = self.__savePicture(decodedData)

            user.picture = filename

            UserRepository.update(user)

        except Exception:
            return Response(status=500)

        return Response(
            status=200
        )

    @staticmethod
    def __savePicture(decodedData: bytes) -> str:
        """Saves a picture to the file system"""

        image = PictureService.resizePicture(decodedData)

        filename = PictureService.createPictureName(image)

        savePath = PictureService.createUserPicturePath(filename)

        isAnimated = getattr(image, "is_animated", False)

        if isAnimated:
            with open(savePath, "wb") as outFile:
                outFile.write(decodedData)
        else:
            image.save(savePath, format=image.format)

        return filename
