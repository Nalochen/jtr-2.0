import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { MemoryCache } from '@jtr/infrastructure/cache';

import { TournamentOverviewData } from './tournament-overview-data.response';

const ENDPOINT = '/api/customer-frontend/get-tournament-overview';

@Injectable({
  providedIn: 'root',
})
export class TournamentOverviewDataClient {
  constructor(private http: HttpClient) {}

  @MemoryCache()
  public getTournamentOverviewData$(): Observable<TournamentOverviewData[]> {
    return this.http.get<TournamentOverviewData[]>(ENDPOINT);
  }
}
