from BusinessDomain.Membership.Repository import IsPartOfRepository
from BusinessDomain.User.Rule.tools import getJwtIdentity
from DataDomain.Database.Enum import UserRoleTypesEnum


class IsCurrentUserModeratorOfTeamRule:

    @staticmethod
    def applies(teamId: int) -> bool:

        user = getJwtIdentity()

        isPartOf = IsPartOfRepository.get(user.id, teamId)

        return isPartOf and isPartOf.user_role == UserRoleTypesEnum.MODERATOR
