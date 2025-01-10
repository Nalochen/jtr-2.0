from BusinessDomain.Tournament.UseCase.QueryHandler import (
    GetPastTournamentOverviewQueryHandler,
)
from DataDomain.Model import Response


class GetPastTournamentOverviewHandler:
    """Handler for getting the past tournament overview"""

    @staticmethod
    def handle() -> Response:

        tournaments = GetPastTournamentOverviewQueryHandler.execute()

        return Response(
            response=tournaments,
            status=200,
        )
