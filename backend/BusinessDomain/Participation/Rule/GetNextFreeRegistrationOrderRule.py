from BusinessDomain.Participation.Repository import ParticipatesInRepository


class GetNextFreeRegistrationOrderRule:

    @staticmethod
    def applies(tournamentId: int) -> int:

        maxOrder = ParticipatesInRepository.getMaxOrder(tournamentId)

        if maxOrder is None:
            return 1

        return maxOrder + 1
