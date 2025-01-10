from dataclasses import dataclass


@dataclass
class CreateTournamentCommand:

    teamId: int
    additionalInformation: str
    name: str
    startDate: str
    endDate: str
    startArrivalDate: str
    endArrivalDate: str
    address: str
    possibleSpace: int
    registrationProcedureType: str
    registrationProcedureText: str
    registrationProcedureUrl: str
    registrationStartDate: str
    registrationCosts: int
    registrationCostsType: str
    depositCosts: int
    depositCostsType: str
    accommodationCosts: int
    accommodationCostsType: str
    guestCosts: int
    guestCostsType: str
    costsText: str
    deadlines: str
    schedule: str
    contacts: str
    accommodationType: str
    accommodationLocation: str
    location: str
    foodMorning: str
    foodNoon: str
    foodEvening: str
    foodGastro: str
    tournamentSystemText: str
    tournamentSystemUrl: str
    pompfCheckText: str
    pompfCheckUrl: str
    houseRulesText: str
    houseRulesUrl: str
    studdedShoesAllowed: bool
    cleatsShoesAllowed: bool
    camShoesAllowed: bool
    barefootAllowed: bool
    shoesText: str
