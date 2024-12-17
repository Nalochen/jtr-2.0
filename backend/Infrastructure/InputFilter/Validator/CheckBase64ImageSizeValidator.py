import base64
from typing import Any

from flask import current_app

from Infrastructure.InputFilter.Exception.ValidationError import ValidationError
from Infrastructure.InputFilter.Validator.BaseValidator import BaseValidator


class CheckBase64ImageSizeValidator(BaseValidator):
    """Validator that checks if a Base64 string has a valid image size"""

    def validate(self, value: Any) -> None:
        """Validates the value"""

        maxSize = current_app.config['MAX_CONTENT_LENGTH']

        try:
            if len(base64.b64decode(value)) > maxSize:
                raise ValidationError(
                    "Das Bild überschreitet die maximale erlaubte Größe.")

        except Exception:
            raise ValidationError("Das Bild ist ungültig oder beschädigt.")
