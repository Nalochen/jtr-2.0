from flask import g

from DataDomain.Database.Repository.IsPartOfRepository import IsPartOfRepository
from DataDomain.Database.tools import getJwtIdentity
from DataDomain.Model.Response import Response
from ExternalApi.UserFrontend.Service.CheckForMembershipRoleService import CheckForMembershipRoleService


class DeleteMembershipHandler:
    """Handler for deleting an is_part_of relation"""

    @staticmethod
    def handle() -> Response:
        """Handles the delete-membership route"""

        data = g.validatedData

        teamId = data.get('teamId')
        userId = data.get('userId')

        currentUser = getJwtIdentity()

        if not userId:
            userId = currentUser.id

        isPartOfEntry = IsPartOfRepository.get(
            userId=userId,
            teamId=teamId
        )
        if not isPartOfEntry:
            return Response(status=404)

        if data.get(
                'userId') and not CheckForMembershipRoleService.isCurrentUserAdminOfTeam(teamId):
            return Response(status=403)

        try:
            IsPartOfRepository.delete(userId=userId, teamId=teamId)

        except Exception:
            return Response(status=500)

        return Response(status=200)
