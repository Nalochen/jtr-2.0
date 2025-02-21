from BusinessDomain.Membership.Repository import IsPartOfRepository
from BusinessDomain.Tournament.Repository import TournamentRepository
from BusinessDomain.User.Rule.tools import getJwtIdentity
from DataDomain.Database.Enum import UserRoleTypesEnum


class IsCurrentUserAdminOfOrganizingTeamRule:

    @staticmethod
    def applies(tournamentId: int) -> bool:

        user = getJwtIdentity()

        organizingTeam = TournamentRepository.getOrganizingTeam(tournamentId)

        if not organizingTeam:
            return False

        isPartOf = IsPartOfRepository.get(user.id, organizingTeam.id)

        return isPartOf and isPartOf.user_role == UserRoleTypesEnum.ADMIN
