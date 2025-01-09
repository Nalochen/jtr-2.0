
from flask import g

from DataDomain.Database.Repository import IsPartOfRepository
from DataDomain.Model import Response
from ExternalApi.UserFrontend.Service.CheckForMembershipRoleService import (
    CheckForMembershipRoleService,
)


class UpdateMembershipHandler:
    """Handler for updating a membership"""

    @staticmethod
    def handle() -> Response:

        data = g.validatedData

        teamId: int = data.get('teamId')
        userId: int = data.get('userId')
        userRole: str = data.get('userRole')

        membership = IsPartOfRepository.get(userId, teamId)

        if not membership:
            return Response(status=404)

        if not CheckForMembershipRoleService.isCurrentUserAdminOfTeam(
                membership.team_id):
            return Response(status=403)

        try:
            IsPartOfRepository.update(
                userId=userId,
                teamId=teamId,
                userRole=userRole
            )

        except Exception as e:
            return Response(status=500, response=str(e))

        return Response(
            status=200
        )
