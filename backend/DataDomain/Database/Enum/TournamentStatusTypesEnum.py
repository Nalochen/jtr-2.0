from enum import Enum


class TournamentStatusTypesEnum(Enum):
    """Enum class for the tournament status types"""

    CREATED = 'created'

    PUBLISHED = 'published'

    CANCELED = 'canceled'

    OVER = 'over'
