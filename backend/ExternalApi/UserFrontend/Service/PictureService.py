import io
import os
import uuid

from PIL import Image
from flask import current_app
from werkzeug.utils import secure_filename


class PictureService:
    """Service for image manipulation"""

    @staticmethod
    def resizePicture(decodedPicture: bytes) -> Image:
        """Resizes a picture if it is too large based on its base 4 representation"""

        image = Image.open(io.BytesIO(decodedPicture))

        isAnimated = getattr(image, "is_animated", False)

        if not isAnimated and image.mode in ("RGBA", "P"):
            image = image.convert("RGB")

        maxSize = current_app.config['MAX_CONTENT_LENGTH']

        if len(decodedPicture) > maxSize:
            if not isAnimated:
                scaleFactor = (maxSize / len(decodedPicture)) ** 0.5
                newWidth = int(image.width * scaleFactor)
                newHeight = int(image.height * scaleFactor)
                image = image.resize((newWidth, newHeight), Image.ANTIALIAS)

            else:
                raise ValueError(
                    "Das GIF ist zu groß, kann aber nicht automatisch skaliert werden.")

        return image

    @staticmethod
    def createPictureName(image: Image) -> str:
        """Creates the path to a picture"""

        fileExtension = image.format.lower()
        randomHash = uuid.uuid4().hex

        filename = secure_filename(f"{randomHash}.{fileExtension}")

        return filename

    @staticmethod
    def createUserPicturePath(filename: str) -> str:
        """Creates the path to a user picture"""

        uploadFolder = os.path.join(
            current_app.config['UPLOAD_FOLDER'],
            'user-pictures')

        savePath = os.path.join(uploadFolder, filename)

        return savePath
