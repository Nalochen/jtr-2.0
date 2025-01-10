from DataDomain.Database.Repository import IsPartOfRepository
from DataDomain.Database.tools import getJwtIdentity


class IsCurrentUserPartOfTeamRule:

    @staticmethod
    def applies(teamId: int) -> bool:

        user = getJwtIdentity()

        isPartOf = IsPartOfRepository.get(user.id, teamId)

        return isPartOf is not None
