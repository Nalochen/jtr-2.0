from dataclasses import dataclass


@dataclass
class GetTeamsWhereUserIsAdminResult:

    id: int
    name: str
    logo: str | None
