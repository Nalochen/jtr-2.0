from BusinessDomain.Team.Rule import GetTeamByEscapedNameRule
from BusinessDomain.User.Rule import IsCurrentUserMemberOfTeamRule
from BusinessDomain.User.UseCase.QueryHandler.Query import IsMemberOfTeamQuery


class IsMemberOfTeamQueryHandler:

    @staticmethod
    def execute(query: IsMemberOfTeamQuery) -> bool:

        team = GetTeamByEscapedNameRule.get(query.escapedName)

        return IsCurrentUserMemberOfTeamRule.applies(
            team.id)
