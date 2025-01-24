from flask_inputfilter import InputFilter
from flask_inputfilter.Filter import ToNullFilter
from flask_inputfilter.Validator import IsStringValidator


class GetUserDetailsInputFilter(InputFilter):
    """The input filter for the get-user-details route"""

    def __init__(self) -> None:

        super().__init__()

        self.add(
            'escapedUsername',
            required=False,
            filters=[ToNullFilter()],
            validators=[
                IsStringValidator()
            ]
        )
