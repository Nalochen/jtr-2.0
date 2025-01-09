import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { UserData } from './user-data.response';

let ENDPOINT = '/api/user-frontend/get-user-details';

@Injectable({
  providedIn: 'root',
})
export class UserDataClient {
  constructor(private http: HttpClient) {}

  public getUserData$(username: string | undefined): Observable<UserData> {
    if (username !== undefined) {
      ENDPOINT += '/' + username;
    }

    return this.http.get<UserData>(ENDPOINT);
  }
}
