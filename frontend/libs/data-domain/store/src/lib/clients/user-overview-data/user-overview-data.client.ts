import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { MemoryCache } from '@jtr/infrastructure/cache';

import { UserOverviewData } from './user-overview-data.response';

const ENDPOINT = '/api/customer-frontend/get-user-overview';

@Injectable({
  providedIn: 'root',
})
export class UserOverviewDataClient {
  constructor(private http: HttpClient) {}

  @MemoryCache()
  public getUserOverviewData$(): Observable<UserOverviewData[]> {
    return this.http.get<UserOverviewData[]>(ENDPOINT);
  }
}
