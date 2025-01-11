from BusinessDomain.Participation.Repository import ParticipatesInRepository


class IsParticipationDeletedRule:

    @staticmethod
    def applies(tournamentId: int, teamId: int) -> bool:

        if tournamentId is None and teamId is None:
            return False

        return ParticipatesInRepository.isDeleted(
            tournamentId=tournamentId,
            teamId=teamId
        )
