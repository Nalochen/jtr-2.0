import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

const LOGIN_ENDPOINT = '/api/customer-frontend/login';
const REGISTER_ENDPOINT = '/api/customer-frontend/register';

export interface AuthResponse {
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly http: HttpClient) {}

  public login(username: string, password: string): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(LOGIN_ENDPOINT, { username, password })
      .pipe(
        tap((response: AuthResponse) => {
          if (response.token) {
            this.setSession(response.token);
          }
        })
      );
  }

  public register(
    username: string,
    password: string
  ): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(REGISTER_ENDPOINT, { username, password })
      .pipe(
        tap((response: AuthResponse) => {
          if (response.token) {
            this.setSession(response.token);
          }
        })
      );
  }

  private setSession(token: string): void {
    localStorage.setItem('jwt', token);
  }

  public logout(): void {
    localStorage.removeItem('jwt');
  }

  public getToken(): string | null {
    return localStorage.getItem('jwt');
  }

  public isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
