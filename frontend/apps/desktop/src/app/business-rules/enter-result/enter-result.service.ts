import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

const ENTER_RESULT_ENDPOINT = '/api/customer-frontend/create-tournament';

export interface EnterResultRequestBodyElement {
  teamId: number;
  placement: number;
}

export interface EnterResultRequestBody {
  tournamentId: number;
  resultElements: EnterResultRequestBodyElement[];
}

@Injectable({
  providedIn: 'root',
})
export class EnterResultService {
  constructor(private readonly http: HttpClient) {}

  public create(request: EnterResultRequestBody): Observable<void> {
    return this.http.post<void>(ENTER_RESULT_ENDPOINT, request);
  }
}
