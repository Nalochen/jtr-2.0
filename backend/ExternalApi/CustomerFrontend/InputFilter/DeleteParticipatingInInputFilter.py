from Infrastructure.InputFilter.Filter.ToIntFilter import ToIntFilter
from Infrastructure.InputFilter.Filter.ToNullFilter import ToNullFilter
from Infrastructure.InputFilter.InputFilter import InputFilter


class DeleteParticipatingInInputFilter(InputFilter):
    """The input filter for the delete-participates-in route"""

    def __init__(self):
        """Initializes the DeleteParticipatingInInputFilter"""

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
