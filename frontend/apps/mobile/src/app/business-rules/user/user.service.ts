import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { firstValueFrom, tap } from 'rxjs';

import { AuthService } from '../auth/auth.service';

const CREATE_USER_ENDPOINT = '/api/customer-frontend/update-user';
const DELETE_USER_ENDPOINT = '/api/customer-frontend/delete-user';

export interface UpdateUserRequestBody {
  birthdate: string | null;
  city: string | null;
  email: string | null;
  name: string | null;
  pronouns: string | null;
  username: string;
}

export interface UpdateUserResponse {
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private readonly http: HttpClient,
    private readonly authService: AuthService
  ) {}

  public async update(
    request: UpdateUserRequestBody
  ): Promise<UpdateUserResponse> {
    return await firstValueFrom(
      this.http.put<UpdateUserResponse>(CREATE_USER_ENDPOINT, request).pipe(
        tap((response: UpdateUserResponse) => {
          this.authService.setSession(response.token);
        })
      )
    );
  }

  public async delete(): Promise<void> {
    await firstValueFrom(this.http.delete<void>(DELETE_USER_ENDPOINT));

    this.authService.logout();
  }
}
