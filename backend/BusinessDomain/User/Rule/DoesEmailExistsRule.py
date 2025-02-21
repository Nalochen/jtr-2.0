from BusinessDomain.User.Repository import UserRepository


class DoesEmailExistsRule:

    @staticmethod
    def applies(email: str) -> bool:

        return UserRepository.usernameExists(email)
