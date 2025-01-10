from BusinessDomain.User.Rule import IsCurrentUserAdminOfOrganizingTeamRule
from BusinessDomain.User.UseCase.QueryHandler.Query import IsAdminOfOrganizerQuery


class IsAdminOfOrganizerQueryHandler:

    @staticmethod
    def execute(query: IsAdminOfOrganizerQuery) -> int:

        return IsCurrentUserAdminOfOrganizingTeamRule.applies(
            query.tournamentId)
