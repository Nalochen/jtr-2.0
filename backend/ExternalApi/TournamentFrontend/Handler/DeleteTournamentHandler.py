from flask import g

from BusinessDomain.Tournament.Repository import TournamentRepository
from BusinessDomain.Tournament.UseCase.CommandHandler import (
    DeleteTournamentCommandHandler,
)
from BusinessDomain.Tournament.UseCase.CommandHandler.Command import (
    DeleteTournamentCommand,
)
from BusinessDomain.User.Rule import IsCurrentUserAdminOfTeamRule
from DataDomain.Model import Response
from ExternalApi.TournamentFrontend.config.extensions import clearTournamentCache


class DeleteTournamentHandler:
    """Handler for deleting a tournament"""

    @staticmethod
    async def handle() -> Response:

        data = g.validatedData

        tournamentId = data.get('tournamentId')

        tournament = TournamentRepository.get(
            tournamentId=tournamentId
        )
        if not tournament:
            return Response(status=404)

        if not IsCurrentUserAdminOfTeamRule.applies(
                tournament.organizer_id):
            return Response(status=403)

        try:
            DeleteTournamentCommandHandler.execute(
                DeleteTournamentCommand(
                    tournamentId=tournamentId
                )
            )

            clearTournamentCache(tournament.id)

        except Exception:
            return Response(status=500)

        return Response(status=200)
