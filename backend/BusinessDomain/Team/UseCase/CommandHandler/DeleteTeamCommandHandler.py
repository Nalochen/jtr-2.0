from BusinessDomain.Team.Repository import TeamRepository
from BusinessDomain.Team.UseCase.CommandHandler.Command import DeleteTeamCommand
from Infrastructure.Logger import logger


class DeleteTeamCommandHandler:

    @staticmethod
    def execute(command: DeleteTeamCommand) -> None:

        try:
            TeamRepository.delete(
                teamId=command.teamId
            )

        except Exception as e:
            logger.error(f'DeleteTeamCommandHandler | execute | {e}')
            raise e
