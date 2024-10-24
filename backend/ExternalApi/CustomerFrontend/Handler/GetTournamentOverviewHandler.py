from DataDomain.Database.Repository.TournamentRepository import TournamentRepository
from DataDomain.Model.Response import Response


class GetTournamentOverviewHandler:
    """Handler for getting tournament overview."""

    def handle(self) -> Response:
        """Get tournament overview."""

        tournaments = TournamentRepository.getTournamentOverview()

        responseData = [
            {
                'id': tournament.id,
                'name': tournament.name,
                'organizerLogo': tournament.logo,
                'startDate': tournament.start_date.isoformat(),
                'totalTeams': int(
                    tournament.total_teams) if tournament.total_teams else 0,
                'registeredTeams': int(
                    tournament.registered_teams) if tournament.registered_teams else 0,
            } for tournament in tournaments]

        return Response(
            response=responseData,
            status=200,
        )
