from flask import g

from BusinessDomain.Team.Rule import DoesTeamExistsRule
from BusinessDomain.Team.UseCase.QueryHandler import GetHistoricTeamPointsQueryHandler
from BusinessDomain.Team.UseCase.QueryHandler.Query import GetHistoricTeamPointsQuery
from DataDomain.Model import Response


class GetHistoricTeamPointsHandler:
    """Handler for getting historic team points"""

    @staticmethod
    def handle() -> Response:

        data = g.validated_data

        teamId: int = data.get('teamId')

        if not DoesTeamExistsRule.applies(teamId):
            return Response(status=404)

        try:
            historicPoints = GetHistoricTeamPointsQueryHandler.execute(
                GetHistoricTeamPointsQuery(teamId=teamId))

        except Exception as e:
            return Response(status=500, response=str(e))

        return Response(response=historicPoints, status=200)
