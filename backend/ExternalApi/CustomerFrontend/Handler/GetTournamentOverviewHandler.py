from DataDomain.Database.Repository.TournamentRepository import TournamentRepository
from DataDomain.Model.Response import Response


class GetTournamentOverviewHandler:
    """Handler for getting tournament overview."""

    def handle(self) -> Response:
        """Get tournament overview."""

        tournaments = TournamentRepository.getTournamentOverview()

        responseData = [
            {
                'tournament_id': tournament.id,
                'organizer_logo': tournament.logo,
                'start_date': tournament.start_date.isoformat(),
                'total_teams': int(
                    tournament.total_teams) if tournament.total_teams else 0,
                'registered_teams': int(
                    tournament.registered_teams) if tournament.registered_teams else 0,
                'tournament_name': tournament.name} for tournament in tournaments]

        return Response(
            response=responseData,
            status=200,
        )
