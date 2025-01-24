from flask_inputfilter import InputFilter
from flask_inputfilter.Filter import ToNullFilter
from flask_inputfilter.Validator import IsStringValidator


class IsMemberOfTeamInputFilter(InputFilter):
    """The input filter for the is-member-of-team route"""

    def __init__(self) -> None:

        super().__init__()

        self.add(
            'escapedName',
            required=True,
            filters=[ToNullFilter()],
            validators=[
                IsStringValidator()
            ]
        )
