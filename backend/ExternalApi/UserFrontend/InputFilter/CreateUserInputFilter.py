from Infrastructure.InputFilter.Enum.RegexEnum import EMAIL_REGEX, ISO_DATE_REGEX
from Infrastructure.InputFilter.Filter.StringTrimFilter import StringTrimFilter
from Infrastructure.InputFilter.Filter.ToBoolFilter import ToBoolFilter
from Infrastructure.InputFilter.Filter.ToNullFilter import ToNullFilter
from Infrastructure.InputFilter.InputFilter import InputFilter
from Infrastructure.InputFilter.Validator.IsBoolValidator import IsBoolValidator
from Infrastructure.InputFilter.Validator.IsStringValidator import IsStringValidator
from Infrastructure.InputFilter.Validator.RegexValidator import RegexValidator


class CreateUserInputFilter(InputFilter):
    """The input filter for the register route"""

    def __init__(self):
        """Initializes the CreateUserInputFilter"""

        super().__init__()

        self.add(
            'birthdate',
            required=False,
            filters=[
                ToNullFilter()
            ],
            validators=[
                RegexValidator(
                    ISO_DATE_REGEX,
                    'Das Geburtsdatum muss im iso format sein.'
                )
            ]
        )

        self.add(
            'isBirthdateVisible',
            required=True,
            filters=[ToBoolFilter()],
            validators=[IsBoolValidator()]
        )

        self.add(
            'city',
            required=False,
            filters=[
                StringTrimFilter(),
                ToNullFilter()
            ],
            validators=[IsStringValidator()]
        )

        self.add(
            'isCityVisible',
            required=True,
            filters=[ToBoolFilter()],
            validators=[IsBoolValidator()]
        )

        self.add(
            'email',
            required=False,
            filters=[
                StringTrimFilter(),
                ToNullFilter()
            ],
            validators=[
                RegexValidator(
                    EMAIL_REGEX,
                    'Die Email muss das Format einer Email haben.'
                )
            ]
        )

        self.add(
            'name',
            required=False,
            filters=[
                StringTrimFilter(),
                ToNullFilter()
            ],
            validators=[IsStringValidator()]
        )

        self.add(
            'isNameVisible',
            required=True,
            filters=[ToBoolFilter()],
            validators=[IsBoolValidator()]
        )

        self.add(
            'password',
            required=True,
            filters=[StringTrimFilter()],
            validators=[IsStringValidator()]
        )

        self.add(
            'username',
            required=True,
            filters=[
                StringTrimFilter()
            ],
            validators=[IsStringValidator()]
        )
