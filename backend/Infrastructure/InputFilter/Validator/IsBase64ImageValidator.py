import base64
import io
from PIL import Image
from typing import Any

from Infrastructure.InputFilter.Exception.ValidationError import ValidationError
from Infrastructure.InputFilter.Validator.BaseValidator import BaseValidator


class IsBase64ImageValidator(BaseValidator):
    """Validator that checks if a Base64 string is a valid image"""

    def validate(self, value: Any) -> None:
        """Validates the value"""

        try:
            decodedData = base64.b64decode(value)
            image = Image.open(io.BytesIO(decodedData))
            image.verify()

        except Exception:
            raise ValidationError("Das Bild ist ungültig oder beschädigt.")
