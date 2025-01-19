from flask import g

from BusinessDomain.Team.Rule import DoesTeamExistsRule
from BusinessDomain.Team.UseCase.CommandHandler import CreateTeamCommandHandler
from BusinessDomain.Team.UseCase.CommandHandler.Command import CreateTeamCommand
from config import cache
from DataDomain.Model import Response


class CreateTeamHandler:
    """Handler for creating a team"""

    @staticmethod
    def handle() -> Response:

        data = g.validated_data

        escapedName = data.get('escapedName')

        # TODO: escapedName creation

        if DoesTeamExistsRule.applies(escapedName=escapedName):
            return Response(status=409)

        try:
            CreateTeamCommandHandler.execute(
                CreateTeamCommand(
                    aboutUs=data.get('aboutUs'),
                    city=data.get('city'),
                    contacts=data.get('contacts'),
                    escapedName=escapedName,
                    isMixTeam=data.get('isMixTeam'),
                    name=data.get('name'),
                    trainingTime=data.get('trainingTime')
                )
            )

            cache.delete('team-overview')

        except Exception:
            return Response(status=500)

        return Response(
            status=200
        )
