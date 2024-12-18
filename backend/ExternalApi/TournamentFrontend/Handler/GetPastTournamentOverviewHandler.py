from DataDomain.Database.Repository.TournamentRepository import TournamentRepository
from DataDomain.Model.Response import Response


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
