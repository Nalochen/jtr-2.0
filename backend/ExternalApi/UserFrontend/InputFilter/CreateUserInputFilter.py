from flask_inputfilter import InputFilter
from flask_inputfilter.Enum.RegexEnum import RegexEnum
from flask_inputfilter.Filter import ToNullFilter, ToBooleanFilter, StringTrimFilter
from flask_inputfilter.Validator import RegexValidator, IsBoolValidator, IsStringValidator


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
                    RegexEnum.ISO_DATE.value,
                    'Das Geburtsdatum muss im iso format sein.'
                )
            ]
        )

        self.add(
            'isBirthdateVisible',
            required=True,
            filters=[ToBooleanFilter()],
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
            filters=[ToBooleanFilter()],
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
                    RegexEnum.EMAIL.value,
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
            filters=[ToBooleanFilter()],
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
