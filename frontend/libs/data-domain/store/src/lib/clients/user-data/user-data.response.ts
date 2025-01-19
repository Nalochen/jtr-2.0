export interface UserTeamData {
  id: number;
  name: string;
  logoUrl: string;
}

export interface UserData {
  id: number;
  birthdate?: string;
  city?: string;
  createdAt: string;
  email?: string;
  isBirthdateVisible: boolean;
  isCityVisible: boolean;
  isDeleted: boolean;
  isNameVisible: boolean;
  name?: string;
  pictureUrl: string;
  pronouns: string;
  teams: UserTeamData[];
  updatedAt: string;
  username: string;
}
