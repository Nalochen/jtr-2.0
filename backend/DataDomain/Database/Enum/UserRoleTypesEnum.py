from enum import Enum


class UserRoleTypeEnum(Enum):
    """
    Enum class for the user role types
    """

    MEMBER = 'member'

    ADMIN = 'admin'

    MODERATOR = 'moderator'
