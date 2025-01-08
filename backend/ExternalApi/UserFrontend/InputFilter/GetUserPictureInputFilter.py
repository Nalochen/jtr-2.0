from flask_inputfilter import InputFilter
from flask_inputfilter.Filter import ToIntegerFilter
from flask_inputfilter.Validator import IsIntegerValidator


class GetUserPictureInputFilter(InputFilter):
    """The input filter for the get-user-picture route"""

    def __init__(self):
        """Initializes the GetUserPictureInputFilter"""

        super().__init__()

        self.add(
            'userId',
            required=False,
            filters=[ToIntegerFilter()],
            validators=[
                IsIntegerValidator()
            ]
        )
