from flask_inputfilter import InputFilter
from flask_inputfilter.Filter import ToIntegerFilter
from flask_inputfilter.Validator import IsIntegerValidator


class IsAdminOfTeamInputFilter(InputFilter):
    """The input filter for the is-admin-of-team route"""

    def __init__(self):
        """Initializes the IsAdminOfTeamInputFilter"""

        super().__init__()

        self.add(
            'teamId',
            required=True,
            filters=[ToIntegerFilter()],
            validators=[
                IsIntegerValidator()
            ]
        )
