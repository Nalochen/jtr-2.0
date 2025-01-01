from Infrastructure.InputFilter.Filter.ToIntFilter import ToIntFilter
from Infrastructure.InputFilter.InputFilter import InputFilter
from Infrastructure.InputFilter.Validator.IsIntValidator import IsIntValidator


class DeleteTeamInputFilter(InputFilter):
    """The input filter for the delete-team route"""

    def __init__(self):
        """Initializes the DeleteTeamInputFilter"""

        super().__init__()

        self.add(
            'teamId',
            required=True,
            filters=[
                ToIntFilter()
            ],
            validators=[
                IsIntValidator()
            ]
        )
