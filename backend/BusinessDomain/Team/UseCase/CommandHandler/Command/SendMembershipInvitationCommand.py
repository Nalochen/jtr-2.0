from dataclasses import dataclass

from DataDomain.Database.Model import Users


@dataclass
class SendMembershipInvitationCommand:

    user: Users
    teamId: int
