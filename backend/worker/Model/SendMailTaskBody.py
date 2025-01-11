from dataclasses import dataclass
from typing import List


@dataclass
class SendMailTaskBody:
    """Class representing the body of a SendMailTask"""

    subject: str
    recipients: List[str]
    body: str
    html: str | None
