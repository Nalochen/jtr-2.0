from flask_inputfilter import InputFilter
from flask_inputfilter.Filter import StringTrimFilter, ToNullFilter
from flask_inputfilter.Validator import IsStringValidator


class CreateNewPasswordInputFilter(InputFilter):
    """The input filter for the create-new-password route"""

    def __init__(self):
        """Initializes the CreateNewPasswordInputFilter"""

        super().__init__()

        self.add(
            'hash',
            required=True,
            filters=[
                StringTrimFilter()
            ],
            validators=[IsStringValidator()]
        )

        self.add(
            'password',
            required=True,
            filters=[
                StringTrimFilter()
            ],
            validators=[IsStringValidator()]
        )
