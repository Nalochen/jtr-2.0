from BusinessDomain.Team.Repository import TeamRepository
from DataDomain.Model import Response


class GetTeamOverviewHandler:
    """Handler for getting team overview"""

    @staticmethod
    def handle() -> Response:
        """Get team overview"""

        team = TeamRepository.getTeamOverview()

        if team is None:
            return Response(status=404, response='Team not found')

        return Response(
            response=team,
            status=200,
        )
