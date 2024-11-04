import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';

import { TeamData } from './team-data.response';

const ENDPOINT = '/api/customer-frontend/get-team-details/';

@Injectable({
  providedIn: 'root',
})
export class TeamDataClient {
  constructor(private http: HttpClient) {}

  public getTeamData$(teamId: number): Observable<TeamData> {
    return this.http.get<TeamData>(ENDPOINT + teamId.toString()).pipe(
      map((response) => ({
        ...response,
        createdAt: new Date(response.createdAt),
        lastTournamentOrganized: new Date(response.lastTournamentOrganized),
        lastTournamentPlayed: new Date(response.lastTournamentPlayed),
        founded: new Date(response.founded),
        trainingTimeUpdatedAt: new Date(response.trainingTimeUpdatedAt),
        updatedAt: new Date(response.updatedAt),
      }))
    );
  }
}
