from Infrastructure.InputFilter.Filter.ToIntFilter import ToIntFilter
from Infrastructure.InputFilter.InputFilter import InputFilter
from Infrastructure.InputFilter.Validator.IsIntValidator import IsIntValidator


class GetUserDetailsInputFilter(InputFilter):
    """The input filter for the get-user-details route"""

    def __init__(self):
        """Initializes the GetUserDetailsInputFilter"""

        super().__init__()

        self.add(
            'userId',
            required=False,
            filters=[ToIntFilter()],
            validators=[
                IsIntValidator()
            ]
        )
