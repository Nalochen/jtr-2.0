from dataclasses import dataclass
from typing import List

from flask import g

from DataDomain.Database.Model.Tournaments import Tournaments
from DataDomain.Database.Repository.ParticipatesInRepository import ParticipatesInRepository
from DataDomain.Model.Response import Response
from ExternalApi.CustomerFrontend.Service.CheckForMembershipRoleService import CheckForMembershipRoleService
from ExternalApi.CustomerFrontend.config.extensions import clearTournamentCache


@dataclass
class ResultElement:
    """Dataclass for result elements"""

    teamId: int
    placement: int


class CreateResultHandler:
    """Handler for creating tournament results"""

    @staticmethod
    def handle() -> Response:
        """Create tournament results"""

        data = g.validatedData

        tournamentId: int = data.get('tournamentId')

        tournament = Tournaments.query.get(tournamentId)

        if not CheckForMembershipRoleService.isCurrentUserAdminOfTeam(
                tournament.organizer_id):
            return Response(status=403)

        resultElementsData: List[dict] = data.get('resultElements')
        resultElements: List[ResultElement] = [
            ResultElement(**element) for element in resultElementsData]

        try:
            for resultElement in resultElements:
                ParticipatesInRepository.createResult(
                    tournament.id, resultElement.teamId, resultElement.placement)

            clearTournamentCache(tournament.id)

        except Exception:
            return Response(status=500)

        return Response(status=200)
