from flask_inputfilter import InputFilter
from flask_inputfilter.Filter import ToIntegerFilter
from flask_inputfilter.Validator import IsIntegerValidator


class DeleteTeamInputFilter(InputFilter):
    """The input filter for the delete-team route"""

    def __init__(self):
        """Initializes the DeleteTeamInputFilter"""

        super().__init__()

        self.add(
            'teamId',
            required=True,
            filters=[
                ToIntegerFilter()
            ],
            validators=[
                IsIntegerValidator()
            ]
        )
