from DataDomain.Database.Enum.TournamentAccommodationTypesEnum import TournamentAccommodationTypesEnum
from DataDomain.Database.Enum.TournamentCostTypesEnum import TournamentCostTypesEnum
from DataDomain.Database.Enum.TournamentFoodEveningTypesEnum import TournamentFoodEveningTypesEnum
from DataDomain.Database.Enum.TournamentFoodGastroTypesEnum import TournamentFoodGastroTypesEnum
from DataDomain.Database.Enum.TournamentFoodMorningTypesEnum import TournamentFoodMorningTypesEnum
from DataDomain.Database.Enum.TournamentFoodNoonTypesEnum import TournamentFoodNoonTypesEnum
from DataDomain.Database.Enum.TournamentRegistrationProcedureTypesEnum import TournamentRegistrationProcedureTypesEnum
from Infrastructure.InputFilter.Enum.RegexEnum import ISO_DATE_REGEX
from Infrastructure.InputFilter.Filter.StringTrimFilter import StringTrimFilter
from Infrastructure.InputFilter.Filter.ToIntFilter import ToIntFilter
from Infrastructure.InputFilter.Filter.ToNullFilter import ToNullFilter
from Infrastructure.InputFilter.InputFilter import InputFilter
from Infrastructure.InputFilter.Validator.IsEnumValidator import IsEnumValidator
from Infrastructure.InputFilter.Validator.IsInstanceValidator import IsInstanceValidator
from Infrastructure.InputFilter.Validator.RegexValidator import RegexValidator


class CreateTournamentInputFilter(InputFilter):
    """The input filter for the create-tournament route"""

    def __init__(self):
        """Initializes the CreateTournamentInputFilter"""

        super().__init__()

        self.add(
            'additionalInformation',
            required=True,
            filters=[StringTrimFilter(), ToNullFilter()]
        )

        self.add(
            'name',
            required=True,
            filters=[StringTrimFilter(), ToNullFilter()]
        )

        self.add(
            'startDate',
            required=True,
            filters=[ToNullFilter()],
            validators=[
                RegexValidator(
                    ISO_DATE_REGEX,
                    'Das Startdatum muss im iso format sein.'
                )
            ]
        )

        self.add(
            'endDate',
            required=True,
            filters=[ToNullFilter()],
            validators=[
                RegexValidator(
                    ISO_DATE_REGEX,
                    'Das Enddatum muss im iso format sein.'
                )
            ]
        )

        self.add(
            'startArrivalDate',
            required=False,
            filters=[ToNullFilter()],
            validators=[
                RegexValidator(
                    ISO_DATE_REGEX,
                    'Das StartAnkunftsdatum muss im iso format sein.'
                )
            ]
        )

        self.add(
            'endArrivalDate',
            required=False,
            filters=[ToNullFilter()],
            validators=[
                RegexValidator(
                    ISO_DATE_REGEX,
                    'Das EndAnkunftsdatum muss im iso format sein.'
                )
            ]
        )

        self.add(
            'address',
            required=True,
            filters=[StringTrimFilter(), ToNullFilter()]
        )

        self.add(
            'possibleSpace',
            required=True,
            filters=[ToIntFilter(), ToNullFilter()]
        )

        self.add(
            'registrationProcedureType',
            required=True,
            filters=[StringTrimFilter(), ToNullFilter()],
            validators=[
                IsEnumValidator(
                    TournamentRegistrationProcedureTypesEnum
                )
            ]
        )

        self.add(
            'registrationProcedureText',
            required=False,
            filters=[StringTrimFilter(), ToNullFilter()]
        )

        self.add(
            'registrationStartDate',
            required=True,
            filters=[ToNullFilter()],
            validators=[
                RegexValidator(
                    ISO_DATE_REGEX,
                    'Das Anmeldedatum muss im iso format sein.'
                )
            ]
        )

        self.add(
            'registrationCosts',
            required=True,
            filters=[ToIntFilter(), ToNullFilter()]
        )

        self.add(
            'registrationCostsType',
            required=False,
            filters=[StringTrimFilter(), ToNullFilter()],
            validators=[
                IsEnumValidator(
                    TournamentCostTypesEnum
                )
            ]
        )

        self.add(
            'depositCosts',
            required=True,
            filters=[ToIntFilter(), ToNullFilter()]
        )

        self.add(
            'depositCostsType',
            required=False,
            filters=[StringTrimFilter(), ToNullFilter()],
            validators=[
                IsEnumValidator(
                    TournamentCostTypesEnum
                )
            ]
        )

        self.add(
            'accommodationCosts',
            required=True,
            filters=[ToIntFilter(), ToNullFilter()]
        )

        self.add(
            'accommodationCostsType',
            required=False,
            filters=[StringTrimFilter(), ToNullFilter()],
            validators=[
                IsEnumValidator(
                    TournamentCostTypesEnum
                )
            ]
        )

        self.add(
            'guestCosts',
            required=True,
            filters=[ToIntFilter(), ToNullFilter()]
        )

        self.add(
            'guestCostsType',
            required=False,
            filters=[StringTrimFilter(), ToNullFilter()],
            validators=[
                IsEnumValidator(
                    TournamentCostTypesEnum
                )
            ]
        )

        self.add(
            'costsText',
            required=False,
            filters=[StringTrimFilter(), ToNullFilter()],
        )

        self.add(
            'deadlines',
            required=True,
            filters=[StringTrimFilter(), ToNullFilter()],
        )

        self.add(
            'schedule',
            required=False,
            filters=[StringTrimFilter(), ToNullFilter()],
        )

        self.add(
            'contacts',
            required=True,
            filters=[ToNullFilter()],
            validators=[
                IsInstanceValidator(
                    list
                )
            ]
        )

        self.add(
            'accommodationType',
            required=True,
            filters=[StringTrimFilter(), ToNullFilter()],
            validators=[
                IsEnumValidator(
                    TournamentAccommodationTypesEnum
                )
            ]
        )

        self.add(
            'accommodationLocation',
            required=True,
            filters=[StringTrimFilter(), ToNullFilter()],
        )

        self.add(
            'foodMorning',
            required=True,
            filters=[StringTrimFilter(), ToNullFilter()],
            validators=[
                IsEnumValidator(
                    TournamentFoodMorningTypesEnum
                )
            ]
        )

        self.add(
            'foodNoon',
            required=True,
            filters=[StringTrimFilter(), ToNullFilter()],
            validators=[
                IsEnumValidator(
                    TournamentFoodNoonTypesEnum
                )
            ]
        )

        self.add(
            'foodEvening',
            required=True,
            filters=[StringTrimFilter(), ToNullFilter()],
            validators=[
                IsEnumValidator(
                    TournamentFoodEveningTypesEnum
                )
            ]
        )

        self.add(
            'foodGastro',
            required=True,
            filters=[StringTrimFilter(), ToNullFilter()],
            validators=[
                IsEnumValidator(
                    TournamentFoodGastroTypesEnum
                )
            ]
        )

        self.add(
            'tournamentSystemText',
            required=True,
            filters=[StringTrimFilter(), ToNullFilter()],
        )

        self.add(
            'tournamentSystemUrl',
            required=True,
            filters=[StringTrimFilter(), ToNullFilter()],
        )

        self.add(
            'pompfCheckText',
            required=True,
            filters=[StringTrimFilter(), ToNullFilter()],
        )

        self.add(
            'pompfCheckUrl',
            required=True,
            filters=[StringTrimFilter(), ToNullFilter()],
        )

        self.add(
            'houseRulesText',
            required=True,
            filters=[StringTrimFilter(), ToNullFilter()],
        )

        self.add(
            'houseRulesUrl',
            required=True,
            filters=[StringTrimFilter(), ToNullFilter()],
        )

        self.add(
            'studdedShoesAllowed',
            required=True,
            filters=[ToIntFilter(), ToNullFilter()],
        )

        self.add(
            'cleatsShoesAllowed',
            required=True,
            filters=[ToIntFilter(), ToNullFilter()],
        )

        self.add(
            'camShoesAllowed',
            required=True,
            filters=[ToIntFilter(), ToNullFilter()],
        )

        self.add(
            'barefootAllowed',
            required=True,
            filters=[ToIntFilter(), ToNullFilter()],
        )

        self.add(
            'shoesText',
            required=False,
            filters=[StringTrimFilter(), ToNullFilter()],
        )
