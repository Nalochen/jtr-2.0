import base64

from flask import g

from DataDomain.Database.Repository.TeamRepository import TeamRepository
from DataDomain.Model.Response import Response
from ExternalApi.UserFrontend.Service.CheckForMembershipRoleService import CheckForMembershipRoleService
from ExternalApi.UserFrontend.Service.PictureService import PictureService
from ExternalApi.UserFrontend.Service.PictureTypeEnum import PictureTypeEnum


class UpdateTeamPictureHandler:
    """Handler for updating a user picture"""

    @staticmethod
    def handle() -> Response:
        """Update a user picture"""

        data = g.validatedData

        teamId: int = data.get('teamId')
        pictureData: str = data.get('picture')

        team = TeamRepository.get(teamId)

        if team is None:
            return Response(status=404)

        if not CheckForMembershipRoleService.isCurrentUserAdminOfTeam(team.id):
            return Response(status=403)

        try:
            decodedData = base64.b64decode(pictureData)

            team.picture = PictureService.savePicture(
                decodedData, PictureTypeEnum.TEAM)

            TeamRepository.update()

        except Exception:
            return Response(status=500)

        return Response(
            status=200
        )
