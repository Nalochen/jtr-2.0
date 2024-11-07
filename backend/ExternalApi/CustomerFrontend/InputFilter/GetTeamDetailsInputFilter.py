from Infrastructure.InputFilter.Filter.ToIntFilter import ToIntFilter
from Infrastructure.InputFilter.InputFilter import InputFilter


class GetTeamDetailsInputFilter(InputFilter):
    """The input filter for the get-team-details route"""

    def __init__(self):
        """Initializes the GetTeamDetailsInputFilter"""

        super().__init__()

        self.add(
            'teamId',
            required=True,
            filters=[ToIntFilter()]
        )
