from flask_jwt_extended import create_access_token
from werkzeug.security import check_password_hash

from BusinessDomain.User.Repository import UserRepository
from BusinessDomain.User.Rule.CreateOrIncreaseLoginAttemptsRule import (
    CreateOrIncreaseLoginAttemptsRule,
)
from BusinessDomain.User.Rule.IncreaseFailedAttemptsRule import IncreaseFailedAttemptsRule
from BusinessDomain.User.Rule.IsUserLockedRule import IsUserLockedRule
from BusinessDomain.User.UseCase.CommandHandler.Command import LoginUserCommand
from BusinessDomain.User.UseCase.CommandHandler.Result import LoginUserResult
from DataDomain.Database.Enum import LockType
from Infrastructure.Mail.User import SendUserLockedMail


class LoginUserCommandHandler:

    @staticmethod
    def execute(command: LoginUserCommand) -> LoginUserResult | bool:

        user = UserRepository.getUserByUsernameOrEmail(
            username=command.username,
            email=command.email
        )

        isLocked, lockType, lockedUntil = IsUserLockedRule.applies(
            user.username)

        if isLocked:
            if lockType == LockType.TEMPORARILY.value:
                IncreaseFailedAttemptsRule.applies(user.username)

            return LoginUserResult(
                lockType=lockType,
                lockedUntil=lockedUntil
            )

        if check_password_hash(user.password_hash, command.password):
            accessToken = create_access_token(
                identity=user.id
            )

            return LoginUserResult(
                token=accessToken,
                language=user.language
            )

        currentAttempts = CreateOrIncreaseLoginAttemptsRule.applies(
            user.username)

        if currentAttempts >= 8:
            user = UserRepository.getUserByUsername(user.username)

            SendUserLockedMail().send(user)
