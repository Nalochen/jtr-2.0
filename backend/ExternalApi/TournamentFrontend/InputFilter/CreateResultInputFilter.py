from Infrastructure.InputFilter.Filter.ToIntFilter import ToIntFilter
from Infrastructure.InputFilter.InputFilter import InputFilter
from Infrastructure.InputFilter.Validator.ArrayElementValidator import ArrayElementValidator
from Infrastructure.InputFilter.Validator.IsArrayValidator import IsArrayValidator
from Infrastructure.InputFilter.Validator.IsIntValidator import IsIntValidator


class CreateResultInputFilter(InputFilter):
    """The input filter for the create-result route"""

    def __init__(self) -> None:
        """Initializes the CreateResultInputFilter"""

        super().__init__()

        self.add(
            'tournamentId',
            required=True,
            filters=[
                ToIntFilter()
            ],
            validators=[
                IsIntValidator()
            ]
        )

        resultElementFilter = InputFilter()
        resultElementFilter.add(
            'teamId',
            required=True,
            filters=[
                ToIntFilter()
            ],
            validators=[
                IsIntValidator()
            ]
        )
        resultElementFilter.add(
            'placement',
            required=True,
            filters=[
                ToIntFilter()
            ],
            validators=[
                IsIntValidator()
            ]
        )

        self.add(
            'resultElements',
            required=True,
            validators=[
                IsArrayValidator(),
                ArrayElementValidator(
                    resultElementFilter
                )
            ]
        )
