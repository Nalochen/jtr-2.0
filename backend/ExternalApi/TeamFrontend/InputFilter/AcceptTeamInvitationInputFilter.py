from Infrastructure.InputFilter.Filter.ToStringFilter import ToStrFilter
from Infrastructure.InputFilter.InputFilter import InputFilter
from Infrastructure.InputFilter.Validator.IsStringValidator import IsStringValidator


class AcceptTeamInvitationInputFilter(InputFilter):
    """The input filter for the accept-team-invitation route"""

    def __init__(self):
        """Initializes the AcceptTeamInvitationInputFilter"""

        super().__init__()

        self.add(
            'hash',
            required=True,
            filters=[ToStrFilter()],
            validators=[IsStringValidator()]
        )
