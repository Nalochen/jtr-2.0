from BusinessDomain.Team.Rule import GetTeamByEscapedNameRule
from BusinessDomain.User.Rule import IsCurrentUserAdminOfTeamRule
from BusinessDomain.User.UseCase.QueryHandler.Query import IsUserAdminOfTeamQuery


class IsAdminOfTeamQueryHandler:

    @staticmethod
    def execute(query: IsUserAdminOfTeamQuery) -> bool:

        team = GetTeamByEscapedNameRule.get(query.escapedName)

        return IsCurrentUserAdminOfTeamRule.applies(
            team.id)
