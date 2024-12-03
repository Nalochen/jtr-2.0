from Infrastructure.InputFilter.Filter.StringTrimFilter import StringTrimFilter
from Infrastructure.InputFilter.Filter.ToBoolFilter import ToBoolFilter
from Infrastructure.InputFilter.Filter.ToIntFilter import ToIntFilter
from Infrastructure.InputFilter.Filter.ToNullFilter import ToNullFilter
from Infrastructure.InputFilter.InputFilter import InputFilter


class CreateTournamentInputFilter(InputFilter):
    """The input filter for the create-tournament route"""

    def __init__(self):
        """Initializes the CreateTournamentInputFilter"""

        super().__init__()

        self.add(
            'name',
            required=False,
            filters=[StringTrimFilter(), ToNullFilter()]
        )
