import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TournamentData } from './tournament-data.response';
import { MemoryCache } from '@jtr/infrastructure/cache';

const ENDPOINT = '/api/customer-frontend/get-tournament-details/';

@Injectable({
  providedIn: 'root',
})
export class TournamentDataClient {
  constructor(private http: HttpClient) {}

  public getTournamentData$(tournamentId: number): Observable<TournamentData> {
    return this.http.get<TournamentData>(ENDPOINT + tournamentId.toString());
  }
}