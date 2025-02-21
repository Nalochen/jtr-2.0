import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { firstValueFrom } from 'rxjs';

const CREATE_RESULT_ENDPOINT = '/api/tournament-frontend/create-result';

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

  public async create(request: EnterResultRequestBody): Promise<void> {
    return await firstValueFrom(
      this.http.post<void>(CREATE_RESULT_ENDPOINT, request)
    );
  }
}
