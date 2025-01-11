import os

from flask import current_app

from BusinessDomain.Common.Enum import PicturePathEnum
from BusinessDomain.User.Repository import UserRepository
from BusinessDomain.User.UseCase.QueryHandler.Query import GetUserPictureQuery


class GetUserPictureQueryHandler:

    @staticmethod
    def execute(query: GetUserPictureQuery) -> [str | None, str | None]:

        user = UserRepository.get(query.userId)

        if not user.picture:
            return None, None

        uploadFolder = os.path.join(
            current_app.config['UPLOAD_FOLDER'],
            PicturePathEnum.USER_PICTURES_FOLDER.value
        )

        return uploadFolder, user.picture
