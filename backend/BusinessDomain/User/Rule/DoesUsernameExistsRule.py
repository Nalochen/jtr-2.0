from BusinessDomain.User.Repository import UserRepository


class DoesUsernameExistsRule:

    @staticmethod
    def applies(username: str) -> bool:

        return UserRepository.usernameExists(username)
