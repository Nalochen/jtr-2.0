import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { TeamOverviewData } from './team-overview-data.response';

const ENDPOINT = '/api/customer-frontend/get-team-overview/';

@Injectable({
  providedIn: 'root',
})
export class TeamOverviewDataClient {
  constructor(private http: HttpClient) {}

  public getTeamOverviewData$(): Observable<TeamOverviewData[]> {
    return this.http.get<TeamOverviewData[]>(ENDPOINT);
  }
}
