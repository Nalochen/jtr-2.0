import uuid

from BusinessDomain.User.Repository import UserRepository
from BusinessDomain.User.UseCase.CommandHandler.Command import (
    CreatePasswordResetHashCommand,
)
from Infrastructure.Mail.User import SendPasswordResetMail


class CreatePasswordResetHashCommandHandler:

    @staticmethod
    def execute(command: CreatePasswordResetHashCommand) -> None:

        user = UserRepository.getByEmail(command.email)

        hash = uuid.uuid4().hex

        user.password_reset_hash = hash

        UserRepository.update(user.id)

        SendPasswordResetMail().send(
            user=user,
            hash=hash
        )
