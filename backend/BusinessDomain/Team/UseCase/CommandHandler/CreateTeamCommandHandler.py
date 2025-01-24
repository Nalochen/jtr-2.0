import json
from datetime import datetime

from BusinessDomain.Membership.Repository import IsPartOfRepository
from BusinessDomain.Team.Repository import TeamRepository
from BusinessDomain.Team.UseCase.CommandHandler.Command import CreateTeamCommand
from BusinessDomain.User.Rule.tools import getJwtIdentity
from DataDomain.Database.Enum import UserRoleTypesEnum
from DataDomain.Database.Model import Teams
from Infrastructure.Logger import logger


class CreateTeamCommandHandler:

    @staticmethod
    def execute(command: CreateTeamCommand) -> str:

        team = Teams()

        team.about_us = command.aboutUs
        team.city = command.city
        team.escaped_name = command.escapedName
        team.is_mix_team = command.isMixTeam
        team.name = command.name
        team.training_time = command.trainingTime

        if command.contacts is not None:
            team.contacts = json.dumps(command.contacts)

        if command.trainingTime is not None:
            team.training_time_updated_at = datetime.now()

        try:
            teamId = TeamRepository.create(team)

        except Exception as e:
            logger.error(f'CreateTeamCommandHandler | execute | {e}')
            raise e

        IsPartOfRepository.create(
            userId=getJwtIdentity().id,
            teamId=teamId,
            userRole=UserRoleTypesEnum.ADMIN.value
        )

        return team.escaped_name
