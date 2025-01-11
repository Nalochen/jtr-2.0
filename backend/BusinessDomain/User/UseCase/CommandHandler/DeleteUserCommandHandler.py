from BusinessDomain.User.Repository import UserRepository
from BusinessDomain.User.UseCase.CommandHandler.Command import DeleteUserCommand


class DeleteUserCommandHandler:

    @staticmethod
    def execute(command: DeleteUserCommand) -> None:

        UserRepository.delete(command.userId)
