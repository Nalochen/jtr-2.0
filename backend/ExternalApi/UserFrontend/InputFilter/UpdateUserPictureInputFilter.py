from flask import current_app
from flask_inputfilter import InputFilter
from flask_inputfilter.Validator import IsBase64ImageValidator, IsBase64ImageCorrectSizeValidator


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
                IsBase64ImageCorrectSizeValidator(
                    minSize=1,
                    maxSize=current_app.config['MAX_CONTENT_LENGTH'])])
