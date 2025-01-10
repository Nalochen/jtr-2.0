from BusinessDomain.Tournament.UseCase.QueryHandler import (
    GetTournamentOverviewQueryHandler,
)
from DataDomain.Model import Response


class GetTournamentOverviewHandler:
    """Handler for getting tournament overview"""

    @staticmethod
    def handle() -> Response:

        tournaments = GetTournamentOverviewQueryHandler.execute()

        return Response(
            response=tournaments,
            status=200,
        )
