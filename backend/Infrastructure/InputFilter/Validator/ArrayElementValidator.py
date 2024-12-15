from typing import Any

from Infrastructure.InputFilter.Exception.ValidationError import ValidationError
from Infrastructure.InputFilter.InputFilter import InputFilter
from Infrastructure.InputFilter.Validator.BaseValidator import BaseValidator


class ArrayElementValidator(BaseValidator):
    """Validator to validate each element in an array"""

    def __init__(self, elementFilter: InputFilter) -> None:
        self.elementFilter = elementFilter

    def validate(self, value: Any) -> None:
        if not isinstance(value, list):
            raise ValidationError("Value is not an array")

        for element in value:
            try:
                self.elementFilter.validateData(element)

            except ValidationError as e:
                raise ValidationError(f"Invalid element in array: {str(e)}")
