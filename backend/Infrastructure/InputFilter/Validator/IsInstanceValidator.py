from typing import Type, Any

from Infrastructure.InputFilter.Exception.ValidationError import ValidationError
from Infrastructure.InputFilter.Validator.BaseValidator import BaseValidator


class IsInstanceValidator(BaseValidator):
    """Validator that checks if a value is an instance of a given class."""

    def __init__(self, classType: Type[Any]) -> None:
        self.classType = classType

    def validate(self, value: Any) -> None:
        if not isinstance(value, self.classType):
            raise ValidationError(
                f"Value '{value}' is not an instance of {self.classType}.")
