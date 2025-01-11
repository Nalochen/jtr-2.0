from typing import List

from BusinessDomain.Tournament.Repository import TournamentRepository
from BusinessDomain.Tournament.UseCase.QueryHandler.Result import TournamentOverviewResult


class GetTournamentOverviewQueryHandler:

    @staticmethod
    def execute() -> List[TournamentOverviewResult]:

        tournaments = TournamentRepository.getPastTournamentOverview()

        if not tournaments:
            return []

        return [TournamentOverviewResult(
            id=tournament.id,
            name=tournament.name,
            organizerLogo=tournament.logo,
            startDate=tournament.start_date,
            endDate=tournament.end_date,
            totalTeams=tournament.possible_space,
            registeredTeams=tournament.registered_teams,
            location=tournament.location,
        ) for tournament in tournaments]
