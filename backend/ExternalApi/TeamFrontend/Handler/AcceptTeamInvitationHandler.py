from flask import g

from DataDomain.Database.Enum.UserRoleTypesEnum import UserRoleTypesEnum
from DataDomain.Database.Repository.IsPartOfRepository import IsPartOfRepository
from DataDomain.Database.Repository.TeamInvitationRepository import (
    TeamInvitationRepository,
)
from DataDomain.Database.tools import getJwtIdentity
from DataDomain.Model.Response import Response


class AcceptTeamInvitationHandler:
    """Handler for accepting a team invitation of a user"""

    @staticmethod
    def handle() -> Response:
        """Accept invitation of a user to join a team"""

        data = g.validatedData

        hash: str = data.get('hash')
        currentUserId: int = getJwtIdentity().id

        try:
            validHash = TeamInvitationRepository.checkHash(
                userId=currentUserId,
                hash=hash
            )

            if not validHash:
                return Response(status=400)

            teamId = TeamInvitationRepository.getTeamIdByHash(hash)

            IsPartOfRepository.create(
                userId=currentUserId,
                teamId=teamId,
                userRole=UserRoleTypesEnum.MEMBER.value
            )

            TeamInvitationRepository.delete(
                userId=currentUserId,
                teamId=teamId
            )

        except Exception:
            return Response(status=500)

        return Response(
            status=200
        )
