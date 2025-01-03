from Infrastructure.InputFilter.Enum.RegexEnum import ISO_DATE_REGEX
from Infrastructure.InputFilter.Filter.StringTrimFilter import StringTrimFilter
from Infrastructure.InputFilter.Filter.ToBoolFilter import ToBoolFilter
from Infrastructure.InputFilter.Filter.ToIntFilter import ToIntFilter
from Infrastructure.InputFilter.Filter.ToNullFilter import ToNullFilter
from Infrastructure.InputFilter.InputFilter import InputFilter
from Infrastructure.InputFilter.Validator.IsArrayValidator import IsArrayValidator
from Infrastructure.InputFilter.Validator.IsBoolValidator import IsBoolValidator
from Infrastructure.InputFilter.Validator.IsIntValidator import IsIntValidator
from Infrastructure.InputFilter.Validator.IsStringValidator import IsStringValidator
from Infrastructure.InputFilter.Validator.RegexValidator import RegexValidator


class UpdateTeamInputFilter(InputFilter):
    """The input filter for the update-team route"""

    def __init__(self):
        """Initializes the UpdateTeamInputFilter"""

        super().__init__()

        self.add(
            'teamId',
            required=True,
            filters=[ToIntFilter()],
            validators=[
                IsIntValidator()
            ]
        )

        self.add(
            'name',
            required=False,
            filters=[StringTrimFilter(), ToNullFilter()],
            validators=[IsStringValidator()]
        )

        self.add(
            'logo',
            required=False,
            filters=[StringTrimFilter(), ToNullFilter()],
            validators=[IsStringValidator()]
        )

        self.add(
            'founded',
            required=False,
            filters=[
                ToNullFilter()
            ],
            validators=[
                RegexValidator(
                    ISO_DATE_REGEX,
                    'Das Geburtsdatum muss im iso format haben.'
                )
            ]
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
            validators=[IsArrayValidator()],
        )
