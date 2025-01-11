from dataclasses import dataclass


@dataclass
class CreatePasswordResetHashCommand:

    email: str
