from typing import List

from BusinessDomain.Team.Repository.TeamRepository import TeamRepository
from BusinessDomain.Team.UseCase.QueryHandler.Result import TeamOverviewQueryResult


class GetTeamOverviewQueryHandler:

    def execute(self) -> List[TeamOverviewQueryResult]:

        teams = TeamRepository.getTeamOverview()

        if not teams:
            return []

        return [TeamOverviewQueryResult(
                id=team.id,
                name=team.name,
                escapedName=team.escaped_name,
                logo=team.logo,
                points=team.points,
                placement=team.placement,
                city=team.city,
                ) for team in teams]
