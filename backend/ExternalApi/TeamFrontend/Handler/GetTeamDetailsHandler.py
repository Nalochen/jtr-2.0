from flask import g

from BusinessDomain.Team.Rule.TeamExistsRule import TeamExistsRule
from BusinessDomain.Team.UseCase.QueryHandler import GetTeamDetailsQueryHandler
from BusinessDomain.Team.UseCase.QueryHandler.Query import GetTeamDetailsQuery
from DataDomain.Model import Response


class GetTeamDetailsHandler:
    """Handler for getting team details"""

    @staticmethod
    def handle() -> Response:
        """Get team details by id"""

        data = g.validatedData

        escapedName: str = data.get('escapedName')

        if not TeamExistsRule.applies(escapedName=escapedName):
            return Response(
                response='Team does not exist',
                status=404,
            )

        team = GetTeamDetailsQueryHandler().execute(
            GetTeamDetailsQuery(escapedName=escapedName))

        return Response(
            response=team,
            status=200,
        )
