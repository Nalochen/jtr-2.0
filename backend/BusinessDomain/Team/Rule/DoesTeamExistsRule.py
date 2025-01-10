from BusinessDomain.Team.Repository import TeamRepository


class DoesTeamExistsRule:

    @staticmethod
    def applies(teamId: int = None, escapedName: str = None) -> bool:

        if teamId is None and escapedName is None:
            return False

        return TeamRepository.exists(teamId, escapedName)
