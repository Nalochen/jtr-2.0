import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

const CREATE_PARTICIPATION_ENDPOINT =
  '/api/tournament-frontend/create-participation';
const DELETE_PARTICIPATION_ENDPOINT =
  '/api/tournament-frontend/delete-participation';

export interface CreateParticipationRequestBody {
  tournamentId: number;
  teamId: number;
}

export interface DeleteParticipationRequestBody {
  tournamentId: number;
  teamId: number;
}

@Injectable({
  providedIn: 'root',
})
export class ManageParticipationService {
  constructor(private readonly http: HttpClient) {}

  public create(request: CreateParticipationRequestBody): Observable<void> {
    return this.http.post<void>(CREATE_PARTICIPATION_ENDPOINT, request);
  }

  public delete(request: DeleteParticipationRequestBody): Observable<void> {
    return this.http.delete<void>(DELETE_PARTICIPATION_ENDPOINT, {
      body: request,
    });
  }
}
