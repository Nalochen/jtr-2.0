from flask_inputfilter import InputFilter
from flask_inputfilter.Filter import ToIntegerFilter
from flask_inputfilter.Validator import IsIntegerValidator


class GetHistoricTeamPointsInputFilter(InputFilter):
    """The input filter for the get-historic-team-points route"""

    def __init__(self):

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
