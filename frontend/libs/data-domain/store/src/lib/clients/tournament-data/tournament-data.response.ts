import { TournamentSystemType } from '../../../../../tournament/enums/tournament-system.enum';
import { TournamentRegistrationProcedureEnum } from '../../../../../tournament/enums/registration-procedure.enum';
import {
  TournamentFoodEvening,
  TournamentFoodGastro,
  TournamentFoodMorning, TournamentFoodNoon
} from '../../../../../tournament/enums/food.enum';
import { TournamentStatus } from '../../../../../tournament/enums/tournament-status.enum';

export interface TournamentDate {
  start: string;
  end: string;
}

export interface TournamentCosts {
  user?: number;
  team?: number;
}

export interface TournamentHouseRules {
  url: string;
  text: string;
}

export interface TournamentSystem {
  url: string;
  text: string;
  type: TournamentSystemType
}

export interface TournamentPompfCheck {
  url: string;
  text: string;
}

export interface TournamentAccommodation {
  text: string;
  type: string;
}

export interface TournamentRegistrationProcedure {
  url: string;
  type: TournamentRegistrationProcedureEnum;
  text: string;
}

export interface TournamentFood {
  evening?: TournamentFoodEvening;
  gastro?: TournamentFoodGastro;
  morning?: TournamentFoodMorning;
  noon?: TournamentFoodNoon;
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
}

export interface TournamentData {
  id: number;
  accommodation: TournamentAccommodation;
  additionalInformation: string;
  address: string;
  arrivalTime: string;
  contacts: string[];
  costs: TournamentCosts;
  createdAt: string;
  date: TournamentDate;
  deadlines: string[];
  food: TournamentFood;
  houseRules: TournamentHouseRules;
  location: string;
  name: string;
  organizer: TournamentTeamData;
  pompfCheck: TournamentPompfCheck;
  possibleSpace: number;
  registrationOpenAt: string;
  registrationProcedure: TournamentRegistrationProcedure;
  schedule?: string;
  shoes: TournamentShoes;
  status: TournamentStatus;
  teamCount: number;
  teams: TournamentTeamsData;
  tournamentSystem: TournamentSystem;
  updatedAt: string;
}
