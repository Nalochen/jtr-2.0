from Infrastructure.InputFilter.Filter.ToIntFilter import ToIntFilter
from Infrastructure.InputFilter.Filter.ToNullFilter import ToNullFilter
from Infrastructure.InputFilter.InputFilter import InputFilter


class DeleteMembershipInputFilter(InputFilter):
    """The input filter for the delete-membership route"""

    def __init__(self):
        """Initializes the DeleteMembershipInputFilter"""

        super().__init__()

        self.add(
            'teamId',
            required=True,
            filters=[
                ToIntFilter()
            ]
        )

        self.add(
            'userId',
            required=False,
            filters=[
                ToIntFilter(),
                ToNullFilter()
            ]
        )
