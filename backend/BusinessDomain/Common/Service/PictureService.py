import io
import os
import uuid

from flask import current_app
from PIL import Image
from werkzeug.utils import secure_filename

from BusinessDomain.Common.Enum import PicturePathEnum, PictureTypeEnum


class PictureService:
    """Service for image manipulation"""

    @staticmethod
    def savePicture(decodedData: bytes, pictureType: PictureTypeEnum) -> str:
        """Saves a picture to the file system"""

        image, originalFormat = PictureService.resizePicture(decodedData)
        filename = PictureService.createPictureName(originalFormat)
        savePath = PictureService.createPicturePath(filename, pictureType)

        isAnimated = getattr(image, 'is_animated', False)

        if isAnimated:
            with open(savePath, 'wb') as outFile:
                outFile.write(decodedData)
        else:
            image.save(savePath, format=originalFormat)

        return filename

    @staticmethod
    def resizePicture(decodedPicture: bytes) -> tuple[Image, str]:
        """Resizes a picture if it is too large based on its base 4 representation"""

        image = Image.open(io.BytesIO(decodedPicture))
        isAnimated = getattr(image, 'is_animated', False)

        originalFormat = image.format

        if not isAnimated and image.mode in ('RGBA', 'P'):
            image = image.convert('RGB')

        maxSize = current_app.config['MAX_CONTENT_LENGTH']

        if len(decodedPicture) > maxSize:
            if not isAnimated:
                scaleFactor = (maxSize / len(decodedPicture)) ** 0.5
                newWidth = int(image.width * scaleFactor)
                newHeight = int(image.height * scaleFactor)
                image = image.resize((newWidth, newHeight), Image.ANTIALIAS)

            else:
                raise ValueError(
                    'Das GIF ist zu groß, kann aber nicht automatisch skaliert werden.')

        return image, originalFormat

    @staticmethod
    def createPictureName(originalFormat: str) -> str:
        """Creates the path to a picture"""

        fileExtension = originalFormat.lower()
        randomHash = uuid.uuid4().hex

        filename = secure_filename(f'{randomHash}.{fileExtension}')

        return filename

    @staticmethod
    def createPicturePath(filename: str, pictureType: PictureTypeEnum) -> str:
        """Creates the path to a user picture"""

        if pictureType == PictureTypeEnum.USER:
            folder = PicturePathEnum.USER_PICTURES_FOLDER.value
        elif pictureType == PictureTypeEnum.TEAM:
            folder = PicturePathEnum.TEAM_PICTURES_FOLDER.value
        else:
            raise ValueError('Invalid picture type')

        uploadFolder = os.path.join(
            current_app.config['UPLOAD_FOLDER'],
            folder)

        savePath = os.path.join(uploadFolder, filename)

        return savePath
