import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { firstValueFrom } from 'rxjs';
import { tap } from 'rxjs/operators';

const LOGIN_ENDPOINT = '/api/customer-frontend/login';
const REGISTER_ENDPOINT = '/api/customer-frontend/register';

export interface LoginRequestBody {
  username: string | null;
  email: string | null;
  password: string;
}

export interface RegisterRequestBody {
  birthdate: string | null;
  isBirthdateVisible: boolean;
  city: string | null;
  isCityVisible: boolean;
  email: string | null;
  name: string | null;
  isNameVisible: boolean;
  password: string;
  username: string;
}

export interface AuthResponse {
  token: string;
}

export interface AuthResponse {
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly http: HttpClient) {}

  public async login(body: LoginRequestBody): Promise<AuthResponse> {
    return await firstValueFrom(this.http.post<AuthResponse>(LOGIN_ENDPOINT, body).pipe(
      tap((response: AuthResponse) => {
        if (response.token) {
          this.setSession(response.token);
        }
      })
    ));
  }

  public async register(body: RegisterRequestBody): Promise<AuthResponse> {
    return await firstValueFrom(this.http.post<AuthResponse>(REGISTER_ENDPOINT, body).pipe(
      tap((response: AuthResponse) => {
        if (response.token) {
          this.setSession(response.token);
        }
      })
    ));
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
