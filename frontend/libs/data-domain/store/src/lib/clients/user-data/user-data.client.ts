import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { UserData } from './user-data.response';

let ENDPOINT = '/api/customer-frontend/get-user-details';

@Injectable({
  providedIn: 'root',
})
export class UserDataClient {
  constructor(private http: HttpClient) {}

  public getUserData$(userId: number | undefined): Observable<UserData> {
    if (userId !== undefined) {
      ENDPOINT += '/' + userId.toString();
    }

    return this.http.get<UserData>(ENDPOINT);
  }
}
