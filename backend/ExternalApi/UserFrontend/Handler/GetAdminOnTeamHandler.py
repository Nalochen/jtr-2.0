from flask import g

from DataDomain.Database.Repository.TeamRepository import TeamRepository
from DataDomain.Database.tools import getJwtIdentity
from DataDomain.Model.Response import Response
from ExternalApi.UserFrontend.Service.CheckForMembershipRoleService import CheckForMembershipRoleService


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
