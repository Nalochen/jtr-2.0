from typing import Any

from Infrastructure.InputFilter.Exception.ValidationError import ValidationError
from Infrastructure.InputFilter.Validator.BaseValidator import BaseValidator


class LengthValidator(BaseValidator):
    """Validator that checks the length of a string value."""

    def __init__(self, minLength: int = 0, maxLength: int = None) -> None:
        self.minLength = minLength
        self.maxLength = maxLength

    def validate(self, value: Any) -> None:
        if len(value) < self.minLength:
            raise ValidationError(
                f"Value must be at least {self.minLength} characters long.")
        if self.maxLength is not None and len(value) > self.maxLength:
            raise ValidationError(
                f"Value must be at most {self.maxLength} characters long.")
