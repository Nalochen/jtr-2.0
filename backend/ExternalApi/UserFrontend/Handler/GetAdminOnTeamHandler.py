
from DataDomain.Database.Repository import TeamRepository
from DataDomain.Database.tools import getJwtIdentity
from DataDomain.Model import Response


class GetAdminOfTeamsHandler:
    """Handler for getting all teams where the current user is an admin"""

    @staticmethod
    def handle() -> Response:

        currentUser = getJwtIdentity()

        teams = TeamRepository.teamsOfAdmin(currentUser.id)

        response = [{
            'id': team.id,
            'name': team.name,
            'logo': team.logo,
        } for team in teams]

        return Response(
            response=response,
            status=200,
        )
