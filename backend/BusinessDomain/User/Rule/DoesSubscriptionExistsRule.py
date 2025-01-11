from BusinessDomain.User.Repository import TournamentSubscriptionRepository


class DoesSubscriptionExistsRule:

    @staticmethod
    def applies(userId: int, tournamentId: int) -> bool:

        if not userId or not tournamentId:
            return False

        return TournamentSubscriptionRepository.exists(
            userId=userId,
            tournamentId=tournamentId
        )
