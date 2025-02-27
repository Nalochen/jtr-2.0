import base64

from BusinessDomain.Common.Enum import PictureTypeEnum
from BusinessDomain.Common.Service import PictureService
from BusinessDomain.Team.Repository import TeamRepository
from BusinessDomain.Team.Rule import GetTeamByIdRule
from BusinessDomain.Team.UseCase.CommandHandler.Command import UpdateTeamPictureCommand
from Infrastructure.Logger import logger


class UpdateTeamPictureCommandHandler:

    @staticmethod
    def execute(command: UpdateTeamPictureCommand) -> str:

        try:
            team = GetTeamByIdRule.get(command.teamId)

            decodedData = base64.b64decode(command.picture)

            team.logo = PictureService.savePicture(
                decodedData, PictureTypeEnum.TEAM)

            TeamRepository.update()

            return team.logo_url

        except Exception as e:
            logger.error(f'UpdateTeamPictureCommandHandler | execute | {e}')
            raise e
