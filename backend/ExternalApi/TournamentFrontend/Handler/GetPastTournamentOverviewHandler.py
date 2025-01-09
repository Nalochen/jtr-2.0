from DataDomain.Database.Repository import TournamentRepository
from DataDomain.Model import Response


class GetPastTournamentOverviewHandler:
    """Handler for getting the past tournament overview"""

    @staticmethod
    def handle() -> Response:
        """Get past tournament overview"""

        tournaments = TournamentRepository.getPastTournamentOverview()

        return Response(
            response=tournaments,
            status=200,
        )
