
from flask import g

from config.cache import cache
from DataDomain.Database.Enum.UserRoleTypesEnum import UserRoleTypesEnum
from DataDomain.Database.Repository.IsPartOfRepository import IsPartOfRepository
from DataDomain.Database.Repository.TeamRepository import TeamRepository
from DataDomain.Database.tools import getJwtIdentity
from DataDomain.Model.Response import Response


class CreateTeamHandler:
    """Handler for creating a team"""

    @staticmethod
    def handle() -> Response:
        """Create team"""

        data = g.validatedData

        try:
            teamId = TeamRepository.create(
                name=data.get('name'),
                city=data.get('city'),
                isMixTeam=data.get('isMixTeam'),
                trainingTime=data.get('trainingTime'),
                aboutUs=data.get('aboutUs'),
                contacts=data.get('contacts')
            )

            IsPartOfRepository.create(
                userId=getJwtIdentity().id,
                teamId=teamId,
                userRole=UserRoleTypesEnum.ADMIN.value
            )

            cache.delete('team-overview')

        except Exception:
            return Response(status=500)

        return Response(
            response=teamId,
            status=200
        )
