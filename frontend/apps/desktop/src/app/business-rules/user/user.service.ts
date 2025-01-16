import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { firstValueFrom, tap } from 'rxjs';

import { AuthService } from '../auth/auth.service';

const UPDATE_USER_ENDPOINT = '/api/user-frontend/update-user';
const UPDATE_USER_PICTURE_ENDPOINT = '/api/user-frontend/update-user-picture';
const UPDATE_USER_LANGUAGE_ENDPOINT = '/api/user-frontend/update-user-language';
const DELETE_USER_ENDPOINT = '/api/user-frontend/delete-user';

export interface UpdateUserRequestBody {
  birthdate: string | null;
  city: string | null;
  email: string | null;
  name: string | null;
  pronouns: string | null;
  username: string;
}

export interface UpdateUserLanguageRequestBody {
  language: string;
}

export interface UpdateUserResponse {
  token: string;
}

export interface UpdateUserPictureResponse {
  pictureUrl: string;
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
      this.http.put<UpdateUserResponse>(UPDATE_USER_ENDPOINT, request).pipe(
        tap((response: UpdateUserResponse) => {
          this.authService.setSession(response.token);
        })
      )
    );
  }

  public async updatePicture(file: File): Promise<UpdateUserPictureResponse> {
    const base64 = await this.fileToBase64(file);
    const request = {
      picture: base64,
    };

    return await firstValueFrom(
      this.http.put<UpdateUserPictureResponse>(
        UPDATE_USER_PICTURE_ENDPOINT,
        request
      )
    );
  }

  public async updateUserLanguage(
    request: UpdateUserLanguageRequestBody
  ): Promise<void> {
    await firstValueFrom(
      this.http.put<void>(UPDATE_USER_LANGUAGE_ENDPOINT, request)
    );
  }

  public async delete(): Promise<void> {
    await firstValueFrom(this.http.delete<void>(DELETE_USER_ENDPOINT));

    this.authService.logout();
  }

  private fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () =>
        resolve(reader.result?.toString().split(',')[1] || '');
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  }
}
