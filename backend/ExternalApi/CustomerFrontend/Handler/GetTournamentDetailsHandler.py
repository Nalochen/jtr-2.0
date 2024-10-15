import json

from flask import Response

from DataDomain.Database.Model.Tournaments import Tournaments


class GetTournamentDetailsHandler:
    """Handler for getting tournament details."""

    def handle(self, tournamentId: int) -> Response:

        if tournamentId is None:
            return Response(status=400, response="No tournamentId provided")

        tournament = Tournaments.query.get(tournamentId)

        if tournament is None:
            return Response(status=404, response="Tournament not found")

        return Response(status=200, response=tournament.serialize())
