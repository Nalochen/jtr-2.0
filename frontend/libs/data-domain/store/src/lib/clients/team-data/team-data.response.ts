export enum UserRole {
  MEMBER = 'member',
  ADMIN = 'admin',
  MODERATOR = 'moderator',
}

export interface TeamUserData {
  id: number;
  name: string;
  role: UserRole;
}

export interface TeamOrganizedTournamentData {
  id: number;
  name: string;
}

export interface TeamPastTournamentData {
  id: number;
  name: string;
  placement: number;
}

export interface TeamData {
  id: number;
  aboutUs: string;
  city: string;
  contacts: string[];
  createdAt: Date;
  founded: Date;
  isMixTeam: boolean;
  lastTournamentOrganized: Date;
  lastTournamentPlayed: Date;
  logo: string;
  members: TeamUserData[];
  name: string;
  organizedTournaments: TeamOrganizedTournamentData[];
  pastTournaments: TeamPastTournamentData[];
  points: number;
  trainingTime: string;
  trainingTimeUpdatedAt: Date;
  updatedAt: Date;
}
