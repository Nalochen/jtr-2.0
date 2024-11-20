import logging

from flask import g

from DataDomain.Database.Repository.ParticipatesInRepository import ParticipatesInRepository
from DataDomain.Model.Response import Response
from ExternalApi.CustomerFrontend.Service.CheckForIsPartOfRoleService import CheckForIsPartOfRoleService


class CreateParticipationHandler:
    """Handler for applying team to a tournament"""

    def __init__(self):
        """Initializes the CreateParticipationHandler"""

        self.participatesInRepository = ParticipatesInRepository()

    def handle(self) -> Response:
        """Create participation of team"""

        data = g.validatedData

        teamId: int = data.get('teamId')
        tournamentId: int = data.get('tournamentId')

        if not CheckForIsPartOfRoleService.isCurrentUserAdminOfTeam(teamId):
            return Response(status=403)

        try:
            if not self.participatesInRepository.exists(tournamentId, teamId):
                self.participatesInRepository.create(tournamentId, teamId)

                return Response(status=200)

            if not self.participatesInRepository.isDeleted(
                    tournamentId, teamId):
                return Response(status=400)

            self.participatesInRepository.recreate(tournamentId, teamId)

        except Exception:
            return Response(status=500)

        return Response(status=200)
