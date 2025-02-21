from werkzeug.security import generate_password_hash

from BusinessDomain.User.Repository import UserRepository
from BusinessDomain.User.UseCase.CommandHandler.Command import CreateNewPasswordCommand
from Infrastructure.Mail.User import SendPasswordResetSuccessMail


class CreateNewPasswordCommandHandler:

    @staticmethod
    def execute(command: CreateNewPasswordCommand) -> None:

        user = UserRepository.getUserByPasswordResetHash(command.hash)

        user.password_hash = generate_password_hash(command.password)
        user.password_reset_hash = None

        UserRepository.update(
            userId=user.id,
        )

        SendPasswordResetSuccessMail().send(
            user=user
        )
