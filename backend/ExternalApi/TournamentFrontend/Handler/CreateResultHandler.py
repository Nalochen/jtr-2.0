from dataclasses import dataclass
from typing import List

from flask import g

from DataDomain.Database.Enum import TournamentStatusTypesEnum
from DataDomain.Database.Model import Tournaments
from DataDomain.Database.Repository import ParticipatesInRepository, TournamentRepository
from DataDomain.Model import Response
from ExternalApi.TournamentFrontend.config.extensions import clearTournamentCache
from ExternalApi.UserFrontend.Service.CheckForMembershipRoleService import (
    CheckForMembershipRoleService,
)


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

            if ParticipatesInRepository.allPlacementsSet(tournament.id):
                tournament.status = TournamentStatusTypesEnum.OVER.value

            TournamentRepository.update(tournament)

        except Exception:
            return Response(status=500)

        return Response(status=200)
