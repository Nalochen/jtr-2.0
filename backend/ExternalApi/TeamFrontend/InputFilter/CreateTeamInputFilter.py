from flask_inputfilter import InputFilter
from flask_inputfilter.Filter import StringTrimFilter, ToBooleanFilter, ToNullFilter
from flask_inputfilter.Validator import (
    IsArrayValidator,
    IsBoolValidator,
    IsStringValidator,
)


class CreateTeamInputFilter(InputFilter):
    """The input filter for the create-team route"""

    def __init__(self):
        """Initializes the CreateTeamInputFilter"""

        super().__init__()

        self.add(
            'name',
            required=True,
            filters=[StringTrimFilter()],
            validators=[IsStringValidator()]
        )

        self.add(
            'city',
            required=False,
            filters=[StringTrimFilter(), ToNullFilter()],
            validators=[IsStringValidator()]
        )

        self.add(
            'isMixTeam',
            required=False,
            filters=[ToBooleanFilter(), ToNullFilter()],
            validators=[IsBoolValidator()]
        )

        self.add(
            'trainingTime',
            required=False,
            filters=[StringTrimFilter(), ToNullFilter()],
            validators=[IsStringValidator()]
        )

        self.add(
            'aboutUs',
            required=False,
            filters=[StringTrimFilter(), ToNullFilter()],
            validators=[IsStringValidator()]
        )

        self.add(
            'contacts',
            required=False,
            filters=[ToNullFilter()],
            validators=[IsArrayValidator()]
        )
