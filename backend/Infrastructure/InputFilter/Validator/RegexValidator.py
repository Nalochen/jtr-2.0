import re

from Infrastructure.InputFilter.Exception.ValidationError import ValidationError
from Infrastructure.InputFilter.Validator.BaseValidator import BaseValidator


class RegexValidator(BaseValidator):
    """A validator that checks if a value matches a given regular expression pattern"""

    def __init__(self, pattern: str, errorMessage: str = None) -> None:
        self.pattern = pattern
        self.errorMessage = errorMessage

    def validate(self, value: str) -> None:
        if not re.match(self.pattern, value):
            if self.errorMessage:
                raise ValidationError(self.errorMessage)

            raise ValidationError(
                f"Value '{value}' does not match the required pattern '{
                    self.pattern}'.")
