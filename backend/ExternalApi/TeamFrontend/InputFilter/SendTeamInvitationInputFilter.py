from flask_inputfilter import InputFilter
from flask_inputfilter.Filter import ToIntegerFilter
from flask_inputfilter.Validator import IsIntegerValidator


class SendTeamInvitationInputFilter(InputFilter):
    """The input filter for the send-team-invitation route"""

    def __init__(self):
        """Initializes the SendTeamInvitationInputFilter"""

        super().__init__()

        self.add(
            'userId',
            required=True,
            filters=[ToIntegerFilter()],
            validators=[IsIntegerValidator()]
        )

        self.add(
            'teamId',
            required=True,
            filters=[ToIntegerFilter()],
            validators=[IsIntegerValidator()]
        )
