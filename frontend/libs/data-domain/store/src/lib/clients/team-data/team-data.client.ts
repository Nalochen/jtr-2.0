import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { TeamData } from './team-data.response';

const ENDPOINT = '/api/team-frontend/get-team-details/';

@Injectable({
  providedIn: 'root',
})
export class TeamDataClient {
  constructor(private http: HttpClient) {}

  public getTeamData$(escapedName: string): Observable<TeamData> {
    return this.http.get<TeamData>(ENDPOINT + escapedName);
  }
}
