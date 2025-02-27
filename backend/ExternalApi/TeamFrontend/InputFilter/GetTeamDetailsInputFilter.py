from flask_inputfilter import InputFilter
from flask_inputfilter.Filter import ToStringFilter
from flask_inputfilter.Validator import IsStringValidator


class GetTeamDetailsInputFilter(InputFilter):
    """The input filter for the get-team-details route"""

    def __init__(self) -> None:

        super().__init__()

        self.add(
            'escapedName',
            required=True,
            filters=[ToStringFilter()],
            validators=[
                IsStringValidator()
            ]
        )
