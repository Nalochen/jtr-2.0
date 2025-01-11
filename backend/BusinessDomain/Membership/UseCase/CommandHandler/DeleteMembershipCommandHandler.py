from BusinessDomain.Membership.Repository import IsPartOfRepository
from BusinessDomain.Membership.UseCase.CommandHandler.Command import (
    DeleteMembershipCommand,
)
from Infrastructure.Logger import logger


class DeleteMembershipCommandHandler:

    @staticmethod
    def execute(command: DeleteMembershipCommand) -> None:

        try:
            IsPartOfRepository.delete(
                userId=command.userId,
                teamId=command.teamId
            )

        except Exception as e:
            logger.error(f'DeleteMembershipCommandHandler | execute | {e}')
            raise e
