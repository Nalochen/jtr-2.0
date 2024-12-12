from typing import Any

from Infrastructure.InputFilter.Exception.ValidationError import ValidationError
from Infrastructure.InputFilter.Validator.BaseValidator import BaseValidator


class IsBoolValidator(BaseValidator):
    """Validator that checks if a value is a bool"""

    def validate(self, value: Any) -> None:
        if not isinstance(value, bool):
            raise ValidationError(f"Value '{value}' is not a bool.")
