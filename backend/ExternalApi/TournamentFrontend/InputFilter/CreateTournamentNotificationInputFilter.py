from Infrastructure.InputFilter.Filter.ToIntFilter import ToIntFilter
from Infrastructure.InputFilter.Filter.ToStringFilter import ToStrFilter
from Infrastructure.InputFilter.InputFilter import InputFilter
from Infrastructure.InputFilter.Validator.IsIntValidator import IsIntValidator
from Infrastructure.InputFilter.Validator.IsStringValidator import IsStringValidator


class CreateTournamentNotificationInputFilter(InputFilter):
    """The input filter for the create-tournament-notification route"""

    def __init__(self) -> None:
        """Initializes the CreateTournamentNotificationInputFilter"""

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

        self.add(
            'message',
            required=True,
            filters=[
                ToStrFilter()
            ],
            validators=[
                IsStringValidator()
            ]
        )
