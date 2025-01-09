from flask import g

from DataDomain.Database.Repository import (
    TournamentRepository,
    TournamentSubscriptionRepository,
)
from DataDomain.Database.tools import getJwtIdentity
from DataDomain.Model import Response


class DeleteTournamentSubscriptionHandler:
    """Handler for deleting a tournament subscription"""

    @staticmethod
    def handle() -> Response:
        """Handles the delete-tournament-subscription route"""

        data = g.validatedData

        tournamentId = data.get('tournamentId')
        currentUserId = getJwtIdentity().id

        tournament = TournamentRepository.get(
            tournamentId
        )
        if not tournament:
            return Response(status=404)

        subscription = TournamentSubscriptionRepository.exists(
            currentUserId,
            tournament.id
        )
        if not subscription:
            return Response(status=400)

        try:
            TournamentSubscriptionRepository.delete(
                currentUserId, tournament.id)

        except Exception:
            return Response(status=500)

        return Response(status=200)
