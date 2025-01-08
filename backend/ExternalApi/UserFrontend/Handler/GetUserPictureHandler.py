import os

from flask import current_app, g, send_from_directory

from DataDomain.Database.Repository.UserRepository import UserRepository
from DataDomain.Model.Response import Response


class GetUserPictureHandler:
    """Handler for getting user picture"""

    @staticmethod
    def handle() -> Response:
        """Get user picture"""

        data = g.validatedData

        userId: int = data.get('userId')

        user = UserRepository.get(userId)

        uploadFolder = os.path.join(
            current_app.config['UPLOAD_FOLDER'],
            'user-pictures')

        return send_from_directory(
            uploadFolder, user.picture
        )
