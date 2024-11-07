from typing import Any


class BaseValidator:
    """BaseValidator-Klasse. Every validator should inherit from it"""

    def validate(self, value: Any) -> None:
        raise NotImplementedError(
            "Validator validate method must be implemented")
