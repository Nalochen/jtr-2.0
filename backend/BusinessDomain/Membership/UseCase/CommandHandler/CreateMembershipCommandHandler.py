from BusinessDomain.Membership.Repository import IsPartOfRepository
from BusinessDomain.Membership.UseCase.CommandHandler.Command import (
    CreateMembershipCommand,
)
from BusinessDomain.Team.Repository import TeamInvitationRepository
from DataDomain.Database.Enum import UserRoleTypesEnum


class CreateMembershipCommandHandler:

    @staticmethod
    def execute(command: CreateMembershipCommand) -> None:

        teamId = TeamInvitationRepository.getTeamIdByHash(command.hash)

        IsPartOfRepository.create(
            userId=command.userId,
            teamId=teamId,
            userRole=UserRoleTypesEnum.MEMBER.value
        )

        TeamInvitationRepository.delete(
            userId=command.userId,
            teamId=teamId
        )
