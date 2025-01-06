from flask import current_app
from flask_inputfilter import InputFilter
from flask_inputfilter.Filter import ToIntegerFilter
from flask_inputfilter.Validator import IsBase64ImageValidator, IsBase64ImageCorrectSizeValidator, IsIntegerValidator


class UpdateTeamPictureInputFilter(InputFilter):
    """The input filter for the update-team-picture route"""

    def __init__(self):
        """Initializes the UpdateTeamPictureInputFilter"""

        super().__init__()

        self.add(
            'teamId',
            required=True,
            filters=[ToIntegerFilter()],
            validators=[IsIntegerValidator()]
        )

        self.add(
            'picture',
            required=True,
            validators=[
                IsBase64ImageValidator(),
                IsBase64ImageCorrectSizeValidator(
                    minSize=1,
                    maxSize=current_app.config['MAX_CONTENT_LENGTH'])])
