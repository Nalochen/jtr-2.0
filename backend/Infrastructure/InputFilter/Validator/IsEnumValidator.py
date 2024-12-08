from enum import Enum
from typing import Type, Any

from Infrastructure.InputFilter.Exception.ValidationError import ValidationError
from Infrastructure.InputFilter.Validator.BaseValidator import BaseValidator


class IsEnumValidator(BaseValidator):
    """Validator that checks if a value is in a given Enum"""

    def __init__(self, enumClass: Type[Enum]) -> None:
        self.enumClass = enumClass

    def validate(self, value: Any) -> None:
        if not (value in self.enumClass):
            raise ValidationError(
                f"Value '{value}' is not an value of {self.enumClass}.")
