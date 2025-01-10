from DataDomain.Database.Enum import UserRoleTypesEnum
from DataDomain.Database.Repository import IsPartOfRepository, TournamentRepository
from DataDomain.Database.tools import getJwtIdentity


class IsCurrentUserAdminOfOrganizingTeamRule:

    @staticmethod
    def applies(tournamentId: int) -> bool:

        user = getJwtIdentity()

        organizingTeam = TournamentRepository.getOrganizingTeam(tournamentId)

        isPartOf = IsPartOfRepository.get(user.id, organizingTeam.id)

        return isPartOf and isPartOf.user_role == UserRoleTypesEnum.ADMIN
