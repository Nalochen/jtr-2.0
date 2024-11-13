export interface UserTeamData {
  id: number;
  name: string;
  logo: string;
}

export interface UserData {
  id: number;
  birthday: Date;
  city: string;
  createdAt: Date;
  isDeleted: boolean;
  name: string;
  picture: string;
  teams: UserTeamData[];
  updatedAt: Date;
  username: string;
}
