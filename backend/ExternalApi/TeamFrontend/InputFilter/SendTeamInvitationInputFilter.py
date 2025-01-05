from Infrastructure.InputFilter.Filter.ToIntFilter import ToIntFilter
from Infrastructure.InputFilter.InputFilter import InputFilter
from Infrastructure.InputFilter.Validator.IsIntValidator import IsIntValidator


class SendTeamInvitationInputFilter(InputFilter):
    """The input filter for the send-team-invitation route"""

    def __init__(self):
        """Initializes the SendTeamInvitationInputFilter"""

        super().__init__()

        self.add(
            'userId',
            required=True,
            filters=[ToIntFilter()],
            validators=[IsIntValidator()]
        )

        self.add(
            'teamId',
            required=True,
            filters=[ToIntFilter()],
            validators=[IsIntValidator()]
        )
