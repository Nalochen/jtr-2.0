from Infrastructure.InputFilter.Filter.ToIntFilter import ToIntFilter
from Infrastructure.InputFilter.Filter.ToNullFilter import ToNullFilter
from Infrastructure.InputFilter.InputFilter import InputFilter


class FakerInputFilter(InputFilter):
    """The input filter for the Faker API routes"""

    def __init__(self):
        """Initializes the FakerInputFilter"""

        super().__init__()

        self.add(
            'amount',
            required=False,
            filters=[ToIntFilter(), ToNullFilter()]
        )
