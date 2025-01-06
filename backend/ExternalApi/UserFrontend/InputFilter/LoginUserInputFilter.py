from Infrastructure.InputFilter.Enum.RegexEnum import RegexEnum
from Infrastructure.InputFilter.Filter.StringTrimFilter import StringTrimFilter
from Infrastructure.InputFilter.Filter.ToNullFilter import ToNullFilter
from Infrastructure.InputFilter.InputFilter import InputFilter
from Infrastructure.InputFilter.Validator.IsStringValidator import IsStringValidator
from Infrastructure.InputFilter.Validator.RegexValidator import RegexValidator


class LoginUserInputFilter(InputFilter):
    """The input filter for the login route"""

    def __init__(self):
        """Initializes the LoginUserInputFilter"""

        super().__init__()

        self.add(
            'username',
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
                    RegexEnum.EMAIL.value,
                    'Die Email muss das Format einer Email haben.'
                )
            ]
        )

        self.add(
            'password',
            required=True,
            filters=[
                StringTrimFilter()
            ],
            validators=[IsStringValidator()]
        )
