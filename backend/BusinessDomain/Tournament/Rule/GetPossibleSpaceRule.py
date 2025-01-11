from BusinessDomain.Tournament.Repository import TournamentRepository


class GetPossibleSpaceRule:

    @staticmethod
    def applies(tournamentId: int) -> int:

        tournament = TournamentRepository.get(tournamentId)

        if tournament is None:
            return 0

        return tournament.possible_space
