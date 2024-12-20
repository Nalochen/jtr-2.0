from flask import g

from DataDomain.Database.Repository.TournamentRepository import TournamentRepository
from DataDomain.Model.Response import Response
from ExternalApi.UserFrontend.Service.CheckForMembershipRoleService import CheckForMembershipRoleService
from ExternalApi.TournamentFrontend.config.extensions import clearTournamentCache


class DeleteTournamentHandler:
    """Handler for deleting a tournament"""

    @staticmethod
    def handle() -> Response:
        """Handles the delete-tournament route"""

        data = g.validatedData

        tournamentId = data.get('tournamentId')

        tournament = TournamentRepository.get(
            tournamentId=tournamentId
        )
        if not tournament:
            return Response(status=404)

        if not CheckForMembershipRoleService.isCurrentUserAdminOfTeam(
                tournament.organizer_id):
            return Response(status=403)

        try:
            TournamentRepository.delete(tournamentId=tournament.id)

            clearTournamentCache(tournament.id)

        except Exception:
            return Response(status=500)

        return Response(status=200)
