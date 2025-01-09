from flask import g

from DataDomain.Database.Repository import (
    TournamentRepository,
    TournamentSubscriptionRepository,
)
from DataDomain.Database.tools import getJwtIdentity
from DataDomain.Model import Response


class CreateTournamentSubscriptionHandler:
    """Handler for creating tournament subscriptions"""

    @staticmethod
    def handle() -> Response:
        """Create tournament subscriptions"""

        data = g.validatedData

        tournamentId: int = data.get('tournamentId')

        tournament = TournamentRepository.get(tournamentId)
        if not tournament:
            return Response(status=404)

        try:
            TournamentSubscriptionRepository.create(
                tournament.id, getJwtIdentity().id)

        except Exception:
            return Response(status=500)

        return Response(status=200)
