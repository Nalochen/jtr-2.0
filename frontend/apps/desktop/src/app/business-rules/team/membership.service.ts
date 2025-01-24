import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

const DELETE_MEMBERSHIP_ENDPOINT = '/api/team-frontend/delete-membership';

export interface DeleteMembershipRequestBody {
  userId: number;
  teamId: number;
}

@Injectable({
  providedIn: 'root',
})
export class MembershipService {
  constructor(private readonly http: HttpClient) {}

  public delete(request: DeleteMembershipRequestBody): Observable<void> {
    return this.http.delete<void>(DELETE_MEMBERSHIP_ENDPOINT, {
      body: request,
    });
  }
}
