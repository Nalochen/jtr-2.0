from Infrastructure.InputFilter.Filter.ToIntFilter import ToIntFilter
from Infrastructure.InputFilter.InputFilter import InputFilter
from Infrastructure.InputFilter.Validator.IsIntValidator import IsIntValidator


class DeleteTournamentSubscriptionInputFilter(InputFilter):
    """The input filter for the delete-tournament-subscription route"""

    def __init__(self):
        """Initializes the DeleteTournamentSubscriptionInputFilter"""

        super().__init__()

        self.add(
            'tournamentId',
            required=True,
            filters=[
                ToIntFilter()
            ],
            validators=[
                IsIntValidator()
            ]
        )
