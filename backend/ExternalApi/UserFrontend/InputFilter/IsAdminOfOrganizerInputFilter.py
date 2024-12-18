from Infrastructure.InputFilter.Filter.ToIntFilter import ToIntFilter
from Infrastructure.InputFilter.InputFilter import InputFilter
from Infrastructure.InputFilter.Validator.IsIntValidator import IsIntValidator


class IsAdminOfOrganizerInputFilter(InputFilter):
    """The input filter for the is-admin-of-organizer route"""

    def __init__(self):
        """Initializes the IsAdminOfOrganizerInputFilter"""

        super().__init__()

        self.add(
            'tournamentId',
            required=True,
            filters=[ToIntFilter()],
            validators=[
                IsIntValidator()
            ]
        )
