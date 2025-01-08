from flask_inputfilter import InputFilter
from flask_inputfilter.Filter import ToIntegerFilter
from flask_inputfilter.Validator import (
    ArrayElementValidator,
    IsArrayValidator,
    IsIntegerValidator,
)


class CreateResultInputFilter(InputFilter):
    """The input filter for the create-result route"""

    def __init__(self) -> None:
        """Initializes the CreateResultInputFilter"""

        super().__init__()

        self.add(
            'tournamentId',
            required=True,
            filters=[
                ToIntegerFilter()
            ],
            validators=[
                IsIntegerValidator()
            ]
        )

        resultElementFilter = InputFilter()
        resultElementFilter.add(
            'teamId',
            required=True,
            filters=[
                ToIntegerFilter()
            ],
            validators=[
                IsIntegerValidator()
            ]
        )
        resultElementFilter.add(
            'placement',
            required=True,
            filters=[
                ToIntegerFilter()
            ],
            validators=[
                IsIntegerValidator()
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
