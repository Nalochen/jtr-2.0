from typing import Any

from Infrastructure.InputFilter.Exception.ValidationError import ValidationError
from Infrastructure.InputFilter.Validator.BaseValidator import BaseValidator


class IsIntValidator(BaseValidator):
    """Validator that checks if a value is an integer"""

    def validate(self, value: Any) -> None:
        if not isinstance(value, int):
            raise ValidationError(f"Value '{value}' is not an integer.")
