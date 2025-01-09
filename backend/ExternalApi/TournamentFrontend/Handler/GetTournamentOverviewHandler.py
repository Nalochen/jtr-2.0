from DataDomain.Database.Repository import TournamentRepository
from DataDomain.Model import Response


class GetTournamentOverviewHandler:
    """Handler for getting tournament overview"""

    @staticmethod
    def handle() -> Response:
        """Get tournament overview"""

        tournaments = TournamentRepository.getTournamentOverview()

        return Response(
            response=tournaments,
            status=200,
        )
