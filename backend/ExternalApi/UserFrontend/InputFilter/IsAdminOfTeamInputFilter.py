from flask_inputfilter import InputFilter
from flask_inputfilter.Filter import ToNullFilter
from flask_inputfilter.Validator import IsStringValidator


class IsAdminOfTeamInputFilter(InputFilter):
    """The input filter for the is-admin-of-team route"""

    def __init__(self):
        """Initializes the IsAdminOfTeamInputFilter"""

        super().__init__()

        self.add(
            'escapedName',
            required=True,
            filters=[ToNullFilter()],
            validators=[
                IsStringValidator()
            ]
        )
