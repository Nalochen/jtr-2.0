from BusinessDomain.User.Repository import UserRepository


class DoesPasswordResetHashExistsRule:

    @staticmethod
    def applies(hash: str) -> bool:

        if not hash:
            return False

        return UserRepository.getUserByPasswordResetHash(hash) is not None
