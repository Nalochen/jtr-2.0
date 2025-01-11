from BusinessDomain.User.Repository import UserRepository


class DoesUserExistsRule:

    @staticmethod
    def applies(
            userId: int | None = None,
            escapedUsername: str | None = None,
            email: str | None = None) -> bool:

        if userId is None and escapedUsername is None and email is None:
            return False

        return UserRepository.exists(userId, escapedUsername, email)
