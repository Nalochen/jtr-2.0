from Infrastructure.InputFilter.Filter.ToIntFilter import ToIntFilter
from Infrastructure.InputFilter.InputFilter import InputFilter
from Infrastructure.InputFilter.Validator.IsIntValidator import IsIntValidator


class CreateTournamentSubscriptionInputFilter(InputFilter):
    """The input filter for the create-tournament-subscription route"""

    def __init__(self) -> None:
        """Initializes the CreateTournamentSubscriptionInputFilter"""

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
