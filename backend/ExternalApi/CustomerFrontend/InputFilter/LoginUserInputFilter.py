from Infrastructure.InputFilter.Filter.StringTrimFilter import StringTrimFilter
from Infrastructure.InputFilter.Filter.ToNullFilter import ToNullFilter
from Infrastructure.InputFilter.InputFilter import InputFilter


class LoginUserInputFilter(InputFilter):
    """The input filter for the login route"""

    def __init__(self):
        """Initializes the LoginUserInputFilter"""

        super().__init__()

        self.add(
            'username',
            required=True,
            filters=[
                StringTrimFilter(),
                ToNullFilter()
            ]
        )

        self.add(
            'password',
            required=True,
            filters=[
                StringTrimFilter(),
                ToNullFilter()
            ]
        )
