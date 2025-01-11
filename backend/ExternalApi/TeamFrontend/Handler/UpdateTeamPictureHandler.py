
from flask import g

from BusinessDomain.Team.Rule import DoesTeamExistsRule
from BusinessDomain.Team.UseCase.CommandHandler import UpdateTeamPictureCommandHandler
from BusinessDomain.Team.UseCase.CommandHandler.Command import UpdateTeamPictureCommand
from BusinessDomain.User.Rule import IsCurrentUserAdminOfTeamRule
from DataDomain.Model import Response


class UpdateTeamPictureHandler:
    """Handler for updating a user picture"""

    @staticmethod
    def handle() -> Response:

        data = g.validatedData

        teamId: int = data.get('teamId')

        if not DoesTeamExistsRule.applies(teamId):
            return Response(status=404)

        if not IsCurrentUserAdminOfTeamRule.applies(teamId):
            return Response(status=403)

        try:
            UpdateTeamPictureCommandHandler.execute(
                UpdateTeamPictureCommand(
                    teamId=teamId,
                    picture=data.get('picture')
                )
            )

        except Exception:
            return Response(status=500)

        return Response(
            status=200
        )
