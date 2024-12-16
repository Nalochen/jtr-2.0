from DataDomain.Database.Enum.TournamentAccommodationTypesEnum import TournamentAccommodationTypesEnum
from DataDomain.Database.Enum.TournamentCostTypesEnum import TournamentCostTypesEnum
from DataDomain.Database.Enum.TournamentFoodEveningTypesEnum import TournamentFoodEveningTypesEnum
from DataDomain.Database.Enum.TournamentFoodGastroTypesEnum import TournamentFoodGastroTypesEnum
from DataDomain.Database.Enum.TournamentFoodMorningTypesEnum import TournamentFoodMorningTypesEnum
from DataDomain.Database.Enum.TournamentFoodNoonTypesEnum import TournamentFoodNoonTypesEnum
from DataDomain.Database.Enum.TournamentRegistrationProcedureTypesEnum import TournamentRegistrationProcedureTypesEnum
from Infrastructure.InputFilter.Enum.RegexEnum import ISO_DATE_REGEX
from Infrastructure.InputFilter.Filter.StringTrimFilter import StringTrimFilter
from Infrastructure.InputFilter.Filter.ToBoolFilter import ToBoolFilter
from Infrastructure.InputFilter.Filter.ToIntFilter import ToIntFilter
from Infrastructure.InputFilter.Filter.ToNullFilter import ToNullFilter
from Infrastructure.InputFilter.InputFilter import InputFilter
from Infrastructure.InputFilter.Validator.InEnumValidator import InEnumValidator
from Infrastructure.InputFilter.Validator.IsArrayValidator import IsArrayValidator
from Infrastructure.InputFilter.Validator.IsBoolValidator import IsBoolValidator
from Infrastructure.InputFilter.Validator.IsIntValidator import IsIntValidator
from Infrastructure.InputFilter.Validator.IsStringValidator import IsStringValidator
from Infrastructure.InputFilter.Validator.RegexValidator import RegexValidator


class UpdateTournamentInputFilter(InputFilter):
    """The input filter for the update-tournament route"""

    def __init__(self):
        """Initializes the UpdateTournamentInputFilter"""

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
            'additionalInformation',
            required=True,
            filters=[StringTrimFilter()],
            validators=[IsStringValidator()]
        )

        self.add(
            'name',
            required=True,
            filters=[StringTrimFilter()],
            validators=[IsStringValidator()]
        )

        self.add(
            'startDate',
            required=True,
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
            filters=[StringTrimFilter()],
            validators=[IsStringValidator()]
        )

        self.add(
            'possibleSpace',
            required=True,
            filters=[ToIntFilter()],
            validators=[IsIntValidator()]
        )

        self.add(
            'registrationProcedureType',
            required=True,
            filters=[StringTrimFilter()],
            validators=[
                InEnumValidator(
                    TournamentRegistrationProcedureTypesEnum
                )
            ]
        )

        self.add(
            'registrationProcedureText',
            required=False,
            filters=[StringTrimFilter(), ToNullFilter()],
            validators=[IsStringValidator()]
        )

        self.add(
            'registrationStartDate',
            required=True,
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
            filters=[ToIntFilter()],
            validators=[IsIntValidator()]
        )

        self.add(
            'registrationCostsType',
            required=False,
            filters=[StringTrimFilter(), ToNullFilter()],
            validators=[
                InEnumValidator(
                    TournamentCostTypesEnum
                )
            ]
        )

        self.add(
            'depositCosts',
            required=True,
            filters=[ToIntFilter()],
            validators=[IsIntValidator()]
        )

        self.add(
            'depositCostsType',
            required=False,
            filters=[StringTrimFilter(), ToNullFilter()],
            validators=[
                InEnumValidator(
                    TournamentCostTypesEnum
                )
            ]
        )

        self.add(
            'accommodationCosts',
            required=True,
            filters=[ToIntFilter()],
            validators=[
                IsIntValidator()
            ]
        )

        self.add(
            'accommodationCostsType',
            required=False,
            filters=[StringTrimFilter(), ToNullFilter()],
            validators=[
                InEnumValidator(
                    TournamentCostTypesEnum
                )
            ]
        )

        self.add(
            'guestCosts',
            required=True,
            filters=[ToIntFilter()],
            validators=[
                IsIntValidator()
            ]
        )

        self.add(
            'guestCostsType',
            required=False,
            filters=[StringTrimFilter(), ToNullFilter()],
            validators=[
                InEnumValidator(
                    TournamentCostTypesEnum
                )
            ]
        )

        self.add(
            'costsText',
            required=False,
            filters=[StringTrimFilter(), ToNullFilter()],
            validators=[IsStringValidator()]
        )

        self.add(
            'deadlines',
            required=True,
            filters=[StringTrimFilter()],
            validators=[IsStringValidator()]
        )

        self.add(
            'schedule',
            required=False,
            filters=[StringTrimFilter(), ToNullFilter()],
            validators=[IsStringValidator()]
        )

        self.add(
            'contacts',
            required=True,
            validators=[IsArrayValidator()],
        )

        self.add(
            'accommodationType',
            required=True,
            filters=[StringTrimFilter()],
            validators=[
                InEnumValidator(
                    TournamentAccommodationTypesEnum
                )
            ]
        )

        self.add(
            'accommodationLocation',
            required=True,
            filters=[StringTrimFilter()],
            validators=[IsStringValidator()]
        )

        self.add(
            'location',
            required=True,
            filters=[StringTrimFilter()],
            validators=[IsStringValidator()]
        )

        self.add(
            'foodMorning',
            required=True,
            filters=[StringTrimFilter()],
            validators=[
                InEnumValidator(
                    TournamentFoodMorningTypesEnum
                )
            ]
        )

        self.add(
            'foodNoon',
            required=True,
            filters=[StringTrimFilter()],
            validators=[
                InEnumValidator(
                    TournamentFoodNoonTypesEnum
                )
            ]
        )

        self.add(
            'foodEvening',
            required=True,
            filters=[StringTrimFilter()],
            validators=[
                InEnumValidator(
                    TournamentFoodEveningTypesEnum
                )
            ]
        )

        self.add(
            'foodGastro',
            required=True,
            filters=[StringTrimFilter()],
            validators=[
                InEnumValidator(
                    TournamentFoodGastroTypesEnum
                )
            ]
        )

        self.add(
            'tournamentSystemText',
            required=True,
            filters=[StringTrimFilter()],
            validators=[IsStringValidator()]
        )

        self.add(
            'tournamentSystemUrl',
            required=True,
            filters=[StringTrimFilter()],
            validators=[IsStringValidator()]
        )

        self.add(
            'pompfCheckText',
            required=True,
            filters=[StringTrimFilter()],
            validators=[IsStringValidator()]
        )

        self.add(
            'pompfCheckUrl',
            required=True,
            filters=[StringTrimFilter()],
            validators=[IsStringValidator()]
        )

        self.add(
            'houseRulesText',
            required=True,
            filters=[StringTrimFilter()],
            validators=[IsStringValidator()]
        )

        self.add(
            'houseRulesUrl',
            required=True,
            filters=[StringTrimFilter()],
            validators=[IsStringValidator()]
        )

        self.add(
            'studdedShoesAllowed',
            required=True,
            filters=[ToBoolFilter()],
            validators=[IsBoolValidator()]
        )

        self.add(
            'cleatsShoesAllowed',
            required=True,
            filters=[ToBoolFilter()],
            validators=[IsBoolValidator()]
        )

        self.add(
            'camShoesAllowed',
            required=True,
            filters=[ToBoolFilter()],
            validators=[IsBoolValidator()]
        )

        self.add(
            'barefootAllowed',
            required=True,
            filters=[ToBoolFilter()],
            validators=[IsBoolValidator()]
        )

        self.add(
            'shoesText',
            required=False,
            filters=[StringTrimFilter(), ToNullFilter()],
            validators=[IsStringValidator()]
        )

        self.add(
            'registrationProcedureUrl',
            required=True,
            filters=[StringTrimFilter()],
            validators=[IsStringValidator()]
        )
