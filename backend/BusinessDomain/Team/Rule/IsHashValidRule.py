from BusinessDomain.Team.Repository import TeamInvitationRepository


class IsHashValidRule:

    @staticmethod
    def applies(userId: int, hash: str) -> bool:

        if hash is None or userId is None:
            return False

        if TeamInvitationRepository.checkHash(
            userId=userId,
            hash=hash
        ):
            return True

        return False
