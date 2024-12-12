from Infrastructure.InputFilter.Filter.StringTrimFilter import StringTrimFilter
from Infrastructure.InputFilter.Filter.ToBoolFilter import ToBoolFilter
from Infrastructure.InputFilter.Filter.ToNullFilter import ToNullFilter
from Infrastructure.InputFilter.InputFilter import InputFilter
from Infrastructure.InputFilter.Validator.IsArrayValidator import IsArrayValidator
from Infrastructure.InputFilter.Validator.IsBoolValidator import IsBoolValidator
from Infrastructure.InputFilter.Validator.IsStringValidator import IsStringValidator


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
            filters=[ToBoolFilter(), ToNullFilter()],
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
