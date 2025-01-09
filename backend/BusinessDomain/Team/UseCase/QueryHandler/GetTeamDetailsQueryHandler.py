import json

from BusinessDomain.Team.Repository import TeamRepository
from BusinessDomain.Team.UseCase.QueryHandler.Query import GetTeamDetailsQuery
from BusinessDomain.Team.UseCase.QueryHandler.Result import GetTeamDetailsQueryResult


class GetTeamDetailsQueryHandler:

    def __init__(self):
        self.TeamRepository = TeamRepository

    def execute(self, query: GetTeamDetailsQuery) -> GetTeamDetailsQueryResult:

        teamId: int = self.TeamRepository.getTeamIdByEscapedName(query.escapedName)

        teamDetails = self.TeamRepository.getTeamDetailsById(teamId)
        teamMembers = self.TeamRepository.getTeamMembers(teamId)
        teamPastTournaments = self.TeamRepository.getPastTournaments(teamId)
        teamOrganizedTournaments = self.TeamRepository.getOrganizedTournaments(teamId)

        return GetTeamDetailsQueryResult(
            id=teamDetails.id,
            name=teamDetails.name,
            escapedName=teamDetails.escaped_name,
            logo=teamDetails.logo,
            points=teamDetails.points,
            city=teamDetails.city,
            aboutUs=teamDetails.about_us,
            contacts=json.loads(teamDetails.contacts),
            founded=teamDetails.founded,
            isMixTeam=teamDetails.is_mix_team,
            lastOrganizedTournament=teamDetails.last_organized_tournament,
            lastParticipatedTournament=teamDetails.last_participated_tournament,
            members=teamMembers,
            organizedTournaments=teamOrganizedTournaments,
            pastTournaments=teamPastTournaments,
            trainingTime=teamDetails.training_time,
            trainingTimeUpdatedAt=teamDetails.training_time_updated_at,
        )
