export interface UserTeamData {
  id: number;
  name: string;
  logo: string;
}

export interface UserData {
  id: number;
  birthdate?: Date;
  isBirthdateVisible: boolean;
  city?: string;
  isCityVisible: boolean;
  createdAt: Date;
  isDeleted: boolean;
  name?: string;
  isNameVisible: boolean;
  picture: string;
  teams: UserTeamData[];
  updatedAt: Date;
  username: string;
}
