from flask_inputfilter import InputFilter
from flask_inputfilter.Filter import ToStringFilter
from flask_inputfilter.Validator import IsStringValidator


class GetUserDetailsInputFilter(InputFilter):
    """The input filter for the get-user-details route"""

    def __init__(self):
        """Initializes the GetUserDetailsInputFilter"""

        super().__init__()

        self.add(
            'escapedUsername',
            required=False,
            filters=[ToStringFilter()],
            validators=[
                IsStringValidator()
            ]
        )
