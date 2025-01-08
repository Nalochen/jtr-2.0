from flask_inputfilter import InputFilter
from flask_inputfilter.Filter import ToIntegerFilter
from flask_inputfilter.Validator import IsIntegerValidator


class GetTeamDetailsInputFilter(InputFilter):
    """The input filter for the get-team-details route"""

    def __init__(self):
        """Initializes the GetTeamDetailsInputFilter"""

        super().__init__()

        self.add(
            'teamId',
            required=True,
            filters=[ToIntegerFilter()],
            validators=[
                IsIntegerValidator()
            ]
        )
