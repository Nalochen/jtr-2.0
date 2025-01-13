from dataclasses import dataclass


@dataclass
class GetUserDetailsQuery:

    escapedUsername: str | None
