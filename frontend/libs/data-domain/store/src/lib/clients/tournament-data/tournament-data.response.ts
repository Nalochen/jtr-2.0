import {
  TournamentFoodEveningEnum,
  TournamentFoodGastroEnum,
  TournamentFoodMorningEnum,
  TournamentFoodNoonEnum,
} from '../../../../../tournament/enums/food.enum';
import { PricingTypeEnum } from '../../../../../tournament/enums/pricing-type.enum';
import { TournamentRegistrationProcedureTypeEnum } from '../../../../../tournament/enums/registration-procedure.enum';
import { TournamentStatus } from '../../../../../tournament/enums/tournament-status.enum';
import { TournamentSystemType } from '../../../../../tournament/enums/tournament-system.enum';

export interface TournamentDate {
  start: string;
  end: string;
}

export interface TournamentCosts {
  registrationCosts?: number;
  registrationCostsType?: PricingTypeEnum;
  depositCosts?: number;
  depositCostsType?: PricingTypeEnum;
  accommodationCosts?: number;
  accommodationCostsType?: PricingTypeEnum;
  guestCosts?: number;
  guestCostsType?: PricingTypeEnum;
  costsText: string;
}

export interface TournamentHouseRules {
  url: string;
  text: string;
}

export interface TournamentSystem {
  url: string;
  text: string;
  type: TournamentSystemType;
}

export interface TournamentPompfCheck {
  url: string;
  text: string;
}

export interface TournamentAccommodation {
  location: string;
  type: string;
}

export interface TournamentRegistrationProcedure {
  url: string;
  type: TournamentRegistrationProcedureTypeEnum;
  text: string;
}

export interface TournamentFood {
  evening?: TournamentFoodEveningEnum;
  gastro?: TournamentFoodGastroEnum;
  morning?: TournamentFoodMorningEnum;
  noon?: TournamentFoodNoonEnum;
}

export interface TournamentShoes {
  barefootAllowed: boolean;
  camAllowed: boolean;
  cleatsAllowed: boolean;
  studdedAllowed: boolean;
  text: string;
  url: string;
}

export interface TournamentTeamsData {
  participating: TournamentTeamData[];
  waiting: TournamentTeamData[];
}

export interface TournamentTeamData {
  id: number;
  aboutUs: string;
  city: string;
  contacts: string[];
  createdAt: string;
  founded: string;
  isMixTeam: boolean;
  logo: string;
  name: string;
  trainingTime: string;
  updatedAt: string;
  hasPayed: boolean;
  placement: number;
  registrationOrder: number;
}

export interface TournamentOrganizerTeamData {
  id: number;
  aboutUs: string;
  city: string;
  contacts: string[];
  createdAt: string;
  founded: string;
  isMixTeam: boolean;
  logo: string;
  name: string;
  trainingTime: string;
  updatedAt: string;
}

export interface TournamentData {
  id: number;
  accommodation: TournamentAccommodation;
  additionalInformation: string;
  address: string;
  arrivalDate: TournamentDate;
  contacts: string[];
  costs: TournamentCosts;
  createdAt: string;
  date: TournamentDate;
  deadlines: string;
  food: TournamentFood;
  houseRules: TournamentHouseRules;
  location: string;
  name: string;
  organizer: TournamentOrganizerTeamData;
  pompfCheck: TournamentPompfCheck;
  possibleSpace: number;
  registrationStartDate: string;
  registrationProcedure: TournamentRegistrationProcedure;
  schedule?: string;
  shoes: TournamentShoes;
  status: TournamentStatus;
  teamCount: number;
  teams: TournamentTeamsData;
  tournamentSystem: TournamentSystem;
  updatedAt: string;
}
