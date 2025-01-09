
from BusinessDomain.Team.UseCase.QueryHandler import GetTeamOverviewQueryHandler
from DataDomain.Model import Response


class GetTeamOverviewHandler:
    """Handler for getting team overview"""

    @staticmethod
    def handle() -> Response:
        """Get team overview"""

        team = GetTeamOverviewQueryHandler().execute()

        return Response(
            response=team,
            status=200,
        )
