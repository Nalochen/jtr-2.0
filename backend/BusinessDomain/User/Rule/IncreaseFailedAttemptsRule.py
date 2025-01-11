from BusinessDomain.User.Repository import LoginAttemptRepository


class IncreaseFailedAttemptsRule:

    @staticmethod
    def applies(username: str) -> int:

        loginAttempt = LoginAttemptRepository.getByUsername(username=username)

        loginAttempt.attempts += 1

        LoginAttemptRepository.update()

        return loginAttempt.attempts
