from BusinessDomain.Team.Repository import TeamRepository


class TeamExistsRule:

    @staticmethod
    def applies(id: int = None, escapedName: str = None) -> bool:

        if id is None and escapedName is None:
            return False

        if TeamRepository.exists(id, escapedName):
            return True

        return False
