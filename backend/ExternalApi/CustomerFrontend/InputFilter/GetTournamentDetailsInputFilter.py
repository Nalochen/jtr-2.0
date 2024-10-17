from Infrastructure.InputFilter.Filter.ToIntFilter import ToIntFilter
from Infrastructure.InputFilter.InputFilter import InputFilter


class GetTournamentDetailsInputFilter(InputFilter):
    """The input filter for the get-tournament-details route."""

    def __init__(self):
        """Initializes the GetTournamentDetailsInputFilter."""

        super().__init__()

        self.add(
            'tournamentId',
            required=True,
            filters=[ToIntFilter()]
        )
