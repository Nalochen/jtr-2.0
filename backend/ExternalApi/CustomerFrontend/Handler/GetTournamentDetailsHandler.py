from DataDomain.Database.Repository.TournamentRepository import TournamentRepository
from DataDomain.Model.Response import Response


class GetTournamentDetailsHandler:
    """Handler for getting tournament details"""

    @staticmethod
    def handle(tournamentId: int) -> Response:
        """Get tournament details by id"""

        tournament = TournamentRepository.getTournamentDetails(tournamentId)

        if tournament is None:
            return Response(status=404, response='Tournament not found')

        return Response(
            response=tournament,
            status=200,
        )
