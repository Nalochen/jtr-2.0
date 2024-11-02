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
  createdAt: string;
  founded: string;
  isMixTeam: boolean;
  lastTournamentOrganized: string;
  lastTournamentPlayed: string;
  logo: string;
  members: TeamUserData[];
  name: string;
  organizedTournaments: TeamOrganizedTournamentData[];
  pastTournaments: TeamPastTournamentData[];
  points: number;
  trainingTime: string;
  trainingTimeUpdatedAt: string;
  updatedAt: string;
}
