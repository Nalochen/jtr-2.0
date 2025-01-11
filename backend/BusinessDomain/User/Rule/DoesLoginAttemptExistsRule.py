from BusinessDomain.User.Repository import LoginAttemptRepository


class DoesLoginAttemptExistsRule:

    @staticmethod
    def applies(username: str) -> bool:

        if not username:
            return False

        return LoginAttemptRepository.exists(username=username)
