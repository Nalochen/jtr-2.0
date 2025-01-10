from BusinessDomain.User.Repository import UserRepository


class DoesUserExistsRule:

    @staticmethod
    def applies(userId: int) -> bool:

        user = UserRepository.exists(userId)

        return False
