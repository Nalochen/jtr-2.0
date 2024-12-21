from typing import List, TypedDict, Optional


class SendMailTaskBody(TypedDict):
    """Class representing the body of a SendMailTask"""

    subject: str
    recipients: List[str]
    body: str
    html: Optional[str | None]
