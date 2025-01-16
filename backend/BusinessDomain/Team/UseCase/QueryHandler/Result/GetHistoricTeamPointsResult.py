from dataclasses import dataclass
from datetime import datetime


@dataclass
class GetHistoricTeamPointsResult:

    date: datetime
    points: float
