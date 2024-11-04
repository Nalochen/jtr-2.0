from Infrastructure.InputFilter.Filter.StringTrimFilter import StringTrimFilter
from Infrastructure.InputFilter.Filter.ToBoolFilter import ToBoolFilter
from Infrastructure.InputFilter.Filter.ToIntFilter import ToIntFilter
from Infrastructure.InputFilter.Filter.ToNullFilter import ToNullFilter
from Infrastructure.InputFilter.InputFilter import InputFilter


class UpdateTeamInputFilter(InputFilter):
    """The input filter for the update-team route."""

    def __init__(self):
        """Initializes the UpdateTeamInputFilter."""

        super().__init__()

        self.add(
            'teamId',
            required=True,
            filters=[ToIntFilter()]
        )

        self.add(
            'name',
            required=False,
            filters=[StringTrimFilter(), ToNullFilter()]
        )

        self.add(
            'logo',
            required=False,
            filters=[StringTrimFilter(), ToNullFilter()]
        )

        self.add(
            'city',
            required=False,
            filters=[StringTrimFilter(), ToNullFilter()]
        )

        self.add(
            'isMixTeam',
            required=False,
            filters=[ToBoolFilter()]
        )

        self.add(
            'trainingTime',
            required=False,
            filters=[StringTrimFilter(), ToNullFilter()]
        )

        self.add(
            'aboutUs',
            required=False,
            filters=[StringTrimFilter(), ToNullFilter()]
        )

        self.add(
            'contacts',
            required=False,
        )
