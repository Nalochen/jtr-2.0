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
}

export interface TournamentPompfCheck {
  url: string;
  text: string;
}

export enum TournamentRegistrationProcedureType {
  FIRST_COME = 'first_come',
  LOTS = 'lots',
  OTHER = 'other',
}

export interface TournamentRegistrationProcedure {
  url: string;
  type: TournamentRegistrationProcedureType;
}

export enum TournamentFoodEvening {
  PROVIDED = 'provided',
  GRILL_AVAILABLE = 'grill_available',
  NO = 'no',
}

export enum TournamentFoodGastro {
  ON_THE_COURSE = 'on_the_course',
  NEAR = 'near',
  FAR = 'far',
  NO = 'no',
}

export enum TournamentFoodMorning {
  PROVIDED = 'provided',
  NO = 'no',
}

export enum TournamentFoodNoon {
  PROVIDED = 'provided',
  SNACKS = 'snacks',
  NO = 'no',
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

export enum TournamentStatus {
  CREATED = 'created',
  PUBLISHED = 'published',
  CANCELED = 'canceled',
  OVER = 'over',
}

export interface TournamentData {
  id: number;
  accommodation: string;
  address: string;
  arrivalTime: string;
  contacts: string[];
  costs: TournamentCosts;
  createdAt: string;
  date: TournamentDate;
  deadlines?: string;
  food: TournamentFood;
  houseRules: TournamentHouseRules;
  location: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  organizer: any; // TODO
  pompfCheck: TournamentPompfCheck;
  possibleSpace: number;
  registrationOpenAt: string;
  registrationProcedure: TournamentRegistrationProcedure;
  schedule?: string;
  shoes: TournamentShoes;
  status: TournamentStatus;
  teamsCount: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  teams: any[]; // TODO
  updatedAt: string;
}
