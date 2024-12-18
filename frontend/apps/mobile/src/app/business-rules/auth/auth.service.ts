import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  BehaviorSubject,
  catchError,
  firstValueFrom,
  Observable,
  of,
  tap,
} from 'rxjs';
import { map } from 'rxjs/operators';

const LOGIN_ENDPOINT = '/api/user-frontend/login';
const REGISTER_ENDPOINT = '/api/user-frontend/register';

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
  token: string | undefined;
  lockType: LockType | undefined;
  lockedUntil: string | undefined;
}

export enum LockType {
  TEMPORARILY = 'temporarily',
  PERMANENTLY = 'permanently',
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenSubject: BehaviorSubject<string | null>;

  constructor(private readonly http: HttpClient) {
    const token = localStorage.getItem('jwt');
    this.tokenSubject = new BehaviorSubject<string | null>(token);
  }

  public get token$(): Observable<string | null> {
    return this.tokenSubject.asObservable();
  }

  public get isAuthenticated$(): Observable<boolean> {
    return this.token$.pipe(map((token) => !!token));
  }

  public async login(body: LoginRequestBody): Promise<AuthResponse> {
    return await firstValueFrom(
      this.http.post<AuthResponse>(LOGIN_ENDPOINT, body).pipe(
        tap((response: AuthResponse) => {
          if (response.token) {
            this.setSession(response.token);
          }
        }),
        catchError((error) => {
          if (error.status === 401 && error.error) {
            return of(error.error as AuthResponse);
          }
          throw error;
        })
      )
    );
  }

  public async register(body: RegisterRequestBody): Promise<AuthResponse> {
    return await firstValueFrom(
      this.http.post<AuthResponse>(REGISTER_ENDPOINT, body).pipe(
        tap((response: AuthResponse) => {
          if (response.token) {
            this.setSession(response.token);
          }
        })
      )
    );
  }

  public setSession(token: string): void {
    localStorage.setItem('jwt', token);
    this.tokenSubject.next(token);
  }

  public logout(): void {
    localStorage.removeItem('jwt');
    this.tokenSubject.next(null);
  }

  public getToken(): string | null {
    return this.tokenSubject.value;
  }

  public isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
