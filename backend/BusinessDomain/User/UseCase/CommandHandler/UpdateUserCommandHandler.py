from datetime import datetime

from flask_jwt_extended import create_access_token
from werkzeug.security import generate_password_hash

from BusinessDomain.User.Repository import UserRepository
from BusinessDomain.User.Rule.tools import getJwtIdentity
from BusinessDomain.User.UseCase.CommandHandler.Command import UpdateUserCommand


class UpdateUserCommandHandler:

    @staticmethod
    def execute(command: UpdateUserCommand) -> str:

        user = getJwtIdentity()

        username = command.username
        if username is not None:
            user.username = username

        password = command.password
        if password is not None:
            user.password_hash = generate_password_hash(password)

        birthdate = command.birthdate
        if birthdate is not None:
            user.birthdate = datetime.fromisoformat(birthdate)

        city = command.city
        if city is not None:
            user.city = city

        email = command.email
        if email is not None:
            user.email = email

        name = command.name
        if name is not None:
            user.name = name

        pronouns = command.pronouns
        if pronouns is not None:
            user.pronouns = pronouns

        city_visibility = command.isCityVisible
        if city_visibility is not None:
            user.city_visibility = city_visibility

        name_visibility = command.isNameVisible
        if name_visibility is not None:
            user.name_visibility = name_visibility

        birthdate_visibility = command.isBirthdateVisible
        if birthdate_visibility is not None:
            user.birthdate_visibility = birthdate_visibility

        UserRepository.update(user.id)

        return create_access_token(
            identity=user.id
        )
