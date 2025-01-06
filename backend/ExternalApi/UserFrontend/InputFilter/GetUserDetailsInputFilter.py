from flask_inputfilter import InputFilter
from flask_inputfilter.Filter import ToIntegerFilter
from flask_inputfilter.Validator import IsIntegerValidator


class GetUserDetailsInputFilter(InputFilter):
    """The input filter for the get-user-details route"""

    def __init__(self):
        """Initializes the GetUserDetailsInputFilter"""

        super().__init__()

        self.add(
            'userId',
            required=False,
            filters=[ToIntegerFilter()],
            validators=[
                IsIntegerValidator()
            ]
        )
