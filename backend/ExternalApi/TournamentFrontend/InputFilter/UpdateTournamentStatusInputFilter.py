from DataDomain.Database.Enum.TournamentStatusTypesEnum import TournamentStatusTypesEnum
from Infrastructure.InputFilter.Filter.StringTrimFilter import StringTrimFilter
from Infrastructure.InputFilter.Filter.ToIntFilter import ToIntFilter
from Infrastructure.InputFilter.InputFilter import InputFilter
from Infrastructure.InputFilter.Validator.InEnumValidator import InEnumValidator
from Infrastructure.InputFilter.Validator.IsIntValidator import IsIntValidator


class UpdateTournamentStatusInputFilter(InputFilter):
    """The input filter for the update-tournament-status route"""

    def __init__(self):
        """Initializes the UpdateTournamentStatusInputFilter"""

        super().__init__()

        self.add(
            'tournamentId',
            required=True,
            filters=[ToIntFilter()],
            validators=[
                IsIntValidator()
            ]
        )

        self.add(
            'status',
            required=True,
            filters=[StringTrimFilter()],
            validators=[
                InEnumValidator(
                    TournamentStatusTypesEnum
                )
            ]
        )
