import base64

from BusinessDomain.Common.Enum import PictureTypeEnum
from BusinessDomain.Common.Service import PictureService
from BusinessDomain.User.Repository import UserRepository
from BusinessDomain.User.Rule.tools import getJwtIdentity
from BusinessDomain.User.UseCase.CommandHandler.Command import UpdateUserPictureCommand


class UpdateUserPictureCommandHandler:

    @staticmethod
    def execute(command: UpdateUserPictureCommand) -> None:

        user = getJwtIdentity()

        decodedData = base64.b64decode(command.pictureData)

        user.picture = PictureService.savePicture(
            decodedData, PictureTypeEnum.USER)

        UserRepository.update(user.id)
