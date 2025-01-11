import json
from datetime import datetime

from BusinessDomain.Team.Repository import TeamRepository
from BusinessDomain.Team.Rule import GetTeamByIdRule
from BusinessDomain.Team.UseCase.CommandHandler.Command import UpdateTeamCommand
from Infrastructure.Logger import logger


class UpdateTeamCommandHandler:

    @staticmethod
    def execute(command: UpdateTeamCommand):

        team = GetTeamByIdRule.get(command.teamId)

        name = command.name
        if name is not None:
            team.name = name
            team.escaped_name = command.escapedName

        logo = command.logo
        if logo is not None:
            team.logo = logo

        founded = command.founded
        if founded is not None:
            team.founded = datetime.fromisoformat(founded)

        city = command.city
        if city is not None:
            team.city = city

        isMixTeam = command.isMixTeam
        if isMixTeam is not None:
            team.isMixTeam = isMixTeam

        trainingTime = command.trainingTime
        if trainingTime is not None:
            team.trainingTime = trainingTime

        aboutUs = command.aboutUs
        if aboutUs is not None:
            team.aboutUs = aboutUs

        contacts = command.contacts
        if contacts is not None:
            team.contacts = json.dumps(contacts)

        try:
            TeamRepository.update()

        except Exception as e:
            logger.error(f'UpdateTeamCommandHandler | execute | {e}')
            raise e
