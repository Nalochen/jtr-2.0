from Infrastructure.InputFilter.Filter.ToIntFilter import ToIntFilter
from Infrastructure.InputFilter.InputFilter import InputFilter
from Infrastructure.InputFilter.Validator.IsIntValidator import IsIntValidator


class IsAdminOfTeamInputFilter(InputFilter):
    """The input filter for the is-admin-of-team route"""

    def __init__(self):
        """Initializes the IsAdminOfTeamInputFilter"""

        super().__init__()

        self.add(
            'teamId',
            required=True,
            filters=[ToIntFilter()],
            validators=[
                IsIntValidator()
            ]
        )
