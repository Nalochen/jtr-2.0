from Infrastructure.InputFilter.Enum.RegexEnum import EMAIL_REGEX, ISO_DATE_REGEX
from Infrastructure.InputFilter.Filter.StringTrimFilter import StringTrimFilter
from Infrastructure.InputFilter.Filter.ToNullFilter import ToNullFilter
from Infrastructure.InputFilter.InputFilter import InputFilter
from Infrastructure.InputFilter.Validator.IsStringValidator import IsStringValidator
from Infrastructure.InputFilter.Validator.RegexValidator import RegexValidator


class UpdateUserInputFilter(InputFilter):
    """The input filter for the update-user route"""

    def __init__(self):
        """Initializes the UpdateUserInputFilter"""

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
            'city',
            required=False,
            filters=[
                StringTrimFilter(),
                ToNullFilter()
            ],
            validators=[IsStringValidator()]
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
            'password',
            required=False,
            filters=[
                StringTrimFilter(),
                ToNullFilter()
            ],
            validators=[IsStringValidator()]
        )

        self.add(
            'pronouns',
            required=False,
            filters=[
                StringTrimFilter(),
                ToNullFilter()
            ],
            validators=[IsStringValidator()]
        )

        self.add(
            'username',
            required=False,
            filters=[
                StringTrimFilter(),
                ToNullFilter()
            ],
            validators=[IsStringValidator()]
        )
