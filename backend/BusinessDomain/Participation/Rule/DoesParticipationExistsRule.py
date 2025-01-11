from BusinessDomain.Participation.Repository import ParticipatesInRepository


class DoesParticipationExistsRule:

    @staticmethod
    def applies(tournamentId: int, teamId: int) -> bool:

        if tournamentId is None and teamId is None:
            return False

        return ParticipatesInRepository.exists(tournamentId, teamId)
