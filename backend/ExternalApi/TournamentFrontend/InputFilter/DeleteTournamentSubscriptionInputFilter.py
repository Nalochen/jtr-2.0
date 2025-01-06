from flask_inputfilter import InputFilter
from flask_inputfilter.Filter import ToIntegerFilter
from flask_inputfilter.Validator import IsIntegerValidator


class DeleteTournamentSubscriptionInputFilter(InputFilter):
    """The input filter for the delete-tournament-subscription route"""

    def __init__(self):
        """Initializes the DeleteTournamentSubscriptionInputFilter"""

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
