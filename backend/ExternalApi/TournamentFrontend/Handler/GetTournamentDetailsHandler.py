from flask import g

from DataDomain.Database.Repository import TournamentRepository
from DataDomain.Model import Response


class GetTournamentDetailsHandler:
    """Handler for getting tournament details"""

    @staticmethod
    def handle() -> Response:
        """Get tournament details by id"""

        data = g.validatedData

        tournament = TournamentRepository.getTournamentDetails(
            data.get('tournamentId'))

        if tournament is None:
            return Response(status=404, response='Tournament not found')

        return Response(
            response=tournament,
            status=200,
        )
