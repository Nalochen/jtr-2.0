from BusinessDomain.User.Repository import UserRepository
from BusinessDomain.User.UseCase.CommandHandler.Command import UpdateUserLanguageCommand


class UpdateUserLanguageCommandHandler:

    @staticmethod
    def execute(command: UpdateUserLanguageCommand) -> None:

        user = UserRepository.get(command.userId)

        user.language = command.language

        UserRepository.update(user.id)
