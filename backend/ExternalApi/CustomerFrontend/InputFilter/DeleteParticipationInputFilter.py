from Infrastructure.InputFilter.Filter.ToIntFilter import ToIntFilter
from Infrastructure.InputFilter.InputFilter import InputFilter


class DeleteParticipationInputFilter(InputFilter):
    """The input filter for the delete-participation route"""

    def __init__(self):
        """Initializes the DeleteParticipationInputFilter"""

        super().__init__()

        self.add(
            'teamId',
            required=True,
            filters=[
                ToIntFilter()
            ]
        )

        self.add(
            'tournamentId',
            required=True,
            filters=[
                ToIntFilter()
            ]
        )
