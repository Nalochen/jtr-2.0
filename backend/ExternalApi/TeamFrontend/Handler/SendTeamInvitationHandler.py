from flask import g

from DataDomain.Database.Repository.TeamInvitationRepository import (
    TeamInvitationRepository,
)
from DataDomain.Database.Repository.UserRepository import UserRepository
from DataDomain.Model.Response import Response
from ExternalApi.UserFrontend.Service.CheckForMembershipRoleService import (
    CheckForMembershipRoleService,
)
from Infrastructure.Mail.Team.SendTeamInvitationMail import SendTeamInvitationMail


class SendTeamInvitationHandler:
    """Handler for sending a team invitation to a user"""

    @staticmethod
    def handle() -> Response:
        """Send invitation to a user to join a team"""

        data = g.validatedData

        userId: int = data.get('userId')
        teamId: int = data.get('teamId')

        if not CheckForMembershipRoleService.isCurrentUserAdminOfTeam(teamId):
            return Response(status=403)

        user = UserRepository.get(userId)

        if CheckForMembershipRoleService.isUserPartOfTeam(userId, teamId):
            return Response(
                response='User is already a member of team',
                status=400)

        if not user:
            return Response(
                response='User not found',
                status=400)

        if not user.email:
            return Response(
                response='User has no email saved in account',
                status=400)

        try:
            hash = TeamInvitationRepository.create(
                userId=userId,
                teamId=teamId
            )

            SendTeamInvitationMail().send(
                user=user,
                hash=hash
            )

        except Exception:
            return Response(status=500)

        return Response(
            status=200
        )
