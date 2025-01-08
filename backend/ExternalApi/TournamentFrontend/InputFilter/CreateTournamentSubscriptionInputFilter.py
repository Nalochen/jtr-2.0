from flask_inputfilter import InputFilter
from flask_inputfilter.Filter import ToIntegerFilter
from flask_inputfilter.Validator import IsIntegerValidator


class CreateTournamentSubscriptionInputFilter(InputFilter):
    """The input filter for the create-tournament-subscription route"""

    def __init__(self) -> None:
        """Initializes the CreateTournamentSubscriptionInputFilter"""

        super().__init__()

        self.add(
            'tournamentId',
            required=True,
            filters=[
                ToIntegerFilter()
            ],
            validators=[
                IsIntegerValidator()
            ]
        )
