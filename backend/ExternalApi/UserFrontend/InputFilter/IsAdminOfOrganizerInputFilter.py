from flask_inputfilter import InputFilter
from flask_inputfilter.Filter import ToIntegerFilter
from flask_inputfilter.Validator import IsIntegerValidator


class IsAdminOfOrganizerInputFilter(InputFilter):
    """The input filter for the is-admin-of-organizer route"""

    def __init__(self):
        """Initializes the IsAdminOfOrganizerInputFilter"""

        super().__init__()

        self.add(
            'tournamentId',
            required=True,
            filters=[ToIntegerFilter()],
            validators=[
                IsIntegerValidator()
            ]
        )
