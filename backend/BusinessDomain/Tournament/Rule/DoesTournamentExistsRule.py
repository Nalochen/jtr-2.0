from BusinessDomain.Tournament.Repository import TournamentRepository


class DoesTournamentExistsRule:

    @staticmethod
    def applies(tournamentId: int) -> bool:

        if tournamentId is None:
            return False

        return TournamentRepository.exists(tournamentId)
