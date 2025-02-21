from dataclasses import dataclass
from typing import List

from BusinessDomain.Tournament.Model import ResultElement


@dataclass
class CreateResultCommand:

    tournamentId: int
    resultElements: List[ResultElement]
