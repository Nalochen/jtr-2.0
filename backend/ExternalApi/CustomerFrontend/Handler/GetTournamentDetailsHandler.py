from DataDomain.Database.Model.Tournaments import Tournaments
from DataDomain.Model.Response import Response


class GetTournamentDetailsHandler:
    """Handler for getting tournament details."""

    def handle(self, tournamentId: int) -> Response:
        """Get tournament details by id."""

        tournament = Tournaments.query.get(tournamentId)

        if tournament is None:
            return Response(status=404, response="Tournament not found")

        return Response(
            response=tournament.serialize(),
            status=200,
        )
