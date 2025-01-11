from BusinessDomain.Membership.Repository import IsPartOfRepository
from BusinessDomain.Membership.UseCase.CommandHandler.Command import (
    UpdateMembershipCommand,
)
from Infrastructure.Logger import logger


class UpdateMembershipCommandHandler:

    @staticmethod
    def execute(command: UpdateMembershipCommand) -> None:

        try:
            IsPartOfRepository.update(
                userId=command.userId,
                teamId=command.teamId,
                userRole=command.userRole
            )

        except Exception as e:
            logger.error(f'UpdateMembershipCommandHandler | execute | {e}')
            raise e
