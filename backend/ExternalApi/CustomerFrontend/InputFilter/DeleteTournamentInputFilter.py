from Infrastructure.InputFilter.Filter.ToIntFilter import ToIntFilter
from Infrastructure.InputFilter.Filter.ToNullFilter import ToNullFilter
from Infrastructure.InputFilter.InputFilter import InputFilter


class DeleteTournamentInputFilter(InputFilter):
    """The input filter for the delete-tournament route"""

    def __init__(self):
        """Initializes the DeleteTournamentInputFilter"""

        super().__init__()

        self.add(
            'tournamentId',
            required=True,
            filters=[
                ToIntFilter()
            ]
        )
