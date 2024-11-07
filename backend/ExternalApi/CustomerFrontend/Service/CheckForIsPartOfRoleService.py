from DataDomain.Database.Enum.UserRoleTypesEnum import UserRoleTypesEnum
from DataDomain.Database.Repository.IsPartOfRepository import IsPartOfRepository
from DataDomain.Database.tools import getJwtIdentity


class CheckForIsPartOfRoleService:
    """Check for is part of role service class"""

    @staticmethod
    def isUserPartOfTeam(userId: int, teamId: int) -> bool:
        """Check if user is_part_of team"""

        isPartOf = IsPartOfRepository().get(userId, teamId)

        return isPartOf is not None

    @staticmethod
    def isCurrentUserPartOfTeam(teamId: int) -> bool:
        """Check if current user is_part_of"""

        user = getJwtIdentity()

        isPartOf = IsPartOfRepository().get(user.id, teamId)

        return isPartOf is not None

    @staticmethod
    def isCurrentUserAdminOfTeam(teamId: int) -> bool:
        """Check if current user is admin of team"""

        user = getJwtIdentity()

        isPartOf = IsPartOfRepository().get(user.id, teamId)

        return isPartOf and isPartOf.user_role == UserRoleTypesEnum.ADMIN.value

    @staticmethod
    def isCurrentUserCoachOfTeam(teamId: int) -> bool:
        """Check if current user is coach of team"""

        user = getJwtIdentity()

        isPartOf = IsPartOfRepository().get(user.id, teamId)

        return isPartOf and isPartOf.user_role == UserRoleTypesEnum.MODERATOR.value

    @staticmethod
    def isCurrentUserMemberOfTeam(teamId: int) -> bool:
        """Check if current user is member of team"""

        user = getJwtIdentity()

        isPartOf = IsPartOfRepository().get(user.id, teamId)

        return isPartOf and isPartOf.user_role == UserRoleTypesEnum.MEMBER.value
