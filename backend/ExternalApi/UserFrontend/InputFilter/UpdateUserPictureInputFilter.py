from Infrastructure.InputFilter.InputFilter import InputFilter
from Infrastructure.InputFilter.Validator.CheckBase64ImageSizeValidator import CheckBase64ImageSizeValidator
from Infrastructure.InputFilter.Validator.IsBase64ImageValidator import IsBase64ImageValidator


class UpdateUserPictureInputFilter(InputFilter):
    """The input filter for the update-user-picture route"""

    def __init__(self):
        """Initializes the UpdateUserPictureInputFilter"""

        super().__init__()

        self.add(
            'picture',
            required=True,
            validators=[
                IsBase64ImageValidator(),
                CheckBase64ImageSizeValidator()
            ]
        )
