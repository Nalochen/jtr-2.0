from Infrastructure.InputFilter.Filter.ToIntFilter import ToIntFilter
from Infrastructure.InputFilter.InputFilter import InputFilter
from Infrastructure.InputFilter.Validator.IsIntValidator import IsIntValidator


class GetUserPictureInputFilter(InputFilter):
    """The input filter for the get-user-picture route"""

    def __init__(self):
        """Initializes the GetUserPictureInputFilter"""

        super().__init__()

        self.add(
            'userId',
            required=False,
            filters=[ToIntFilter()],
            validators=[
                IsIntValidator()
            ]
        )
