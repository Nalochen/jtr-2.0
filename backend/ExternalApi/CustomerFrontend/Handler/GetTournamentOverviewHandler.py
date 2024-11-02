from DataDomain.Database.Repository.TournamentRepository import TournamentRepository
from DataDomain.Model.Response import Response


class GetTournamentOverviewHandler:
    """Handler for getting tournament overview."""

    def handle(self) -> Response:
        """Get tournament overview."""

        tournaments = TournamentRepository.getTournamentOverview()

        return Response(
            response=tournaments,
            status=200,
        )
