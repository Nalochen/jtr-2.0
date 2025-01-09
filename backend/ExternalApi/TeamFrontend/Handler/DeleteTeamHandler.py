from flask import g

from BusinessDomain.Team.Repository import TeamRepository
from DataDomain.Model import Response
from ExternalApi.TeamFrontend.config.extensions import clearTeamCache
from ExternalApi.UserFrontend.Service.CheckForMembershipRoleService import (
    CheckForMembershipRoleService,
)


class DeleteTeamHandler:
    """Handler for deleting a team"""

    @staticmethod
    def handle() -> Response:
        """Handles the delete-team route"""

        data = g.validatedData

        teamId: int = data.get('teamId')

        team = TeamRepository.get(
            teamId=teamId
        )

        if not team:
            return Response(status=404)

        if not CheckForMembershipRoleService.isCurrentUserAdminOfTeam(team.id):
            return Response(status=403)

        try:
            TeamRepository.delete(teamId=team.id)

            clearTeamCache(team.id)

        except Exception:
            return Response(status=500)

        return Response(status=200)
