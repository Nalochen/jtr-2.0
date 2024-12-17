from flask import g

from DataDomain.Database.Repository.TeamRepository import TeamRepository
from DataDomain.Model.Response import Response


class GetTeamDetailsHandler:
    """Handler for getting team details"""

    @staticmethod
    def handle() -> Response:
        """Get team details by id"""

        data = g.validatedData

        team = TeamRepository.getTeamDetails(data.get('teamId'))

        if team is None:
            return Response(status=404, response='Team not found')

        return Response(
            response=team,
            status=200,
        )
