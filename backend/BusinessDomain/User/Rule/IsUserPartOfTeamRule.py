from BusinessDomain.Membership.Repository import IsPartOfRepository


class IsUserPartOfTeamRule:

    @staticmethod
    def applies(userId: int, teamId: int) -> bool:

        isPartOf = IsPartOfRepository.get(userId, teamId)

        return isPartOf is not None
