from flask import g

from BusinessDomain.User.Rule import IsCurrentUserAdminOfTeamRule
from DataDomain.Database.Repository import TournamentRepository
from DataDomain.Model import Response
from ExternalApi.TournamentFrontend.config.extensions import clearTournamentCache


class UpdateTournamentStatusHandler:
    """Handler for updating a tournament status"""

    @staticmethod
    def handle() -> Response:
        """Update tournament status"""

        data = g.validatedData

        tournamentId: int = data.get('tournamentId')

        tournament = TournamentRepository.get(tournamentId)

        if not IsCurrentUserAdminOfTeamRule.applies(
                tournament.organizer_id):
            return Response(status=403)

        tournament.status = data.get('status')

        try:
            TournamentRepository.update(tournament)

            clearTournamentCache(tournamentId)

        except Exception:
            return Response(status=500)

        return Response(
            status=200
        )
