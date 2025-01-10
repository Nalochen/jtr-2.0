from BusinessDomain.Team.Repository import TeamRepository
from DataDomain.Database.Model import Teams


class GetTeamByIdRule:

    @staticmethod
    def get(teamId: int) -> Teams | None:

        return TeamRepository.get(teamId)
