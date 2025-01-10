from DataDomain.Database.Enum import UserRoleTypesEnum
from DataDomain.Database.Repository import IsPartOfRepository
from DataDomain.Database.tools import getJwtIdentity


class IsCurrentUserModeratorOfTeamRule:

    @staticmethod
    def applies(teamId: int) -> bool:

        user = getJwtIdentity()

        isPartOf = IsPartOfRepository.get(user.id, teamId)

        return isPartOf and isPartOf.user_role == UserRoleTypesEnum.MODERATOR
