from Infrastructure.InputFilter.Filter.ToIntFilter import ToIntFilter
from Infrastructure.InputFilter.InputFilter import InputFilter


class CreateParticipationInputFilter(InputFilter):
    """The input filter for the create-participation route"""

    def __init__(self):
        """Initializes the CreateParticipationInputFilter"""

        super().__init__()

        self.add(
            'teamId',
            required=True,
            filters=[ToIntFilter()]
        )

        self.add(
            'tournamentId',
            required=True,
            filters=[ToIntFilter()]
        )
