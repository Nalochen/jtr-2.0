from datetime import datetime

from flask_jwt_extended import create_access_token
from werkzeug.security import generate_password_hash

from BusinessDomain.User.Repository import UserRepository
from BusinessDomain.User.UseCase.CommandHandler.Command import CreateUserCommand
from BusinessDomain.User.UseCase.CommandHandler.Result import CreateUserResult
from DataDomain.Database.Model import Users


class CreateUserCommandHandler:

    @staticmethod
    def execute(command: CreateUserCommand) -> CreateUserResult:

        user = Users()

        user.birthdate = datetime.fromisoformat(
            command.birthdate) if command.birthdate else None
        user.birthdate_visibility = command.isBirthdateVisible
        user.city = command.city
        user.city_visibility = command.isCityVisible
        user.email = command.email
        user.escaped_username = command.username.lower().replace(' ', '-')
        user.language = command.language
        user.name = command.name
        user.name_visibility = command.isNameVisible
        user.password_hash = generate_password_hash(command.password)
        user.username = command.username

        userId = UserRepository.create(user)

        accessToken = create_access_token(
            identity=userId
        )

        return CreateUserResult(
            token=accessToken,
        )
