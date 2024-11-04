from DataDomain.Database.Repository.TeamRepository import TeamRepository
from DataDomain.Model.Response import Response


class GetTeamDetailsHandler:
    """Handler for getting team details."""

    @staticmethod
    def handle(teamId: int) -> Response:
        """Get team details by id."""

        team = TeamRepository.getTeamDetails(teamId)

        if team is None:
            return Response(status=404, response='Team not found')

        return Response(
            response=team,
            status=200,
        )
