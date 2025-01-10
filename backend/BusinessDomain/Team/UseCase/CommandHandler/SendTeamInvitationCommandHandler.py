import uuid

from BusinessDomain.Team.Repository import TeamInvitationRepository
from BusinessDomain.Team.UseCase.CommandHandler.Command import (
    SendMembershipInvitationCommand,
)
from Infrastructure.Logger import logger
from Infrastructure.Mail.Team import SendTeamInvitationMail


class SendTeamInvitationCommandHandler:

    @staticmethod
    def execute(command: SendMembershipInvitationCommand) -> None:

        randomHash = uuid.uuid4().hex

        try:
            TeamInvitationRepository.create(
                userId=command.user.Id,
                teamId=command.teamId,
                randomHash=randomHash
            )

            SendTeamInvitationMail().send(
                user=command.user,
                hash=randomHash
            )

        except Exception as e:
            logger.error(f'SendTeamInvitationCommandHandler | execute | {e}')
            raise e
