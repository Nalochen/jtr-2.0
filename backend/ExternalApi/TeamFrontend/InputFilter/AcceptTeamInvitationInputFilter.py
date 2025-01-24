from flask_inputfilter import InputFilter
from flask_inputfilter.Filter import ToStringFilter
from flask_inputfilter.Validator import IsStringValidator


class AcceptTeamInvitationInputFilter(InputFilter):
    """The input filter for the accept-team-invitation route"""

    def __init__(self) -> None:

        super().__init__()

        self.add(
            'hash',
            required=True,
            filters=[ToStringFilter()],
            validators=[IsStringValidator()]
        )
