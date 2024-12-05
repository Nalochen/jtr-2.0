export interface UserTeamData {
  id: number;
  name: string;
  logo: string;
}

export interface UserData {
  id: number;
  birthdate?: string;
  isBirthdateVisible: boolean;
  city?: string;
  isCityVisible: boolean;
  createdAt: string;
  isDeleted: boolean;
  name?: string;
  isNameVisible: boolean;
  picture: string;
  pronoums: string;
  teams: UserTeamData[];
  updatedAt: string;
  username: string;
}
