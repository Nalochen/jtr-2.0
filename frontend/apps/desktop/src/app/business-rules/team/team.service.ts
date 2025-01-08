import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { firstValueFrom, Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import { tournamentDetailsSelector } from '@jtr/business-domain/tournament';
import { TournamentData } from '@jtr/data-domain/store';
import { SingletonGetter } from '@jtr/infrastructure/cache';

const CREATE_TEAM_ENDPOINT =
  '/api/team-frontend/create-team';
const UPDATE_TEAM_ENDPOINT =
  '/api/team-frontend/update-team';
const DELETE_TEAM_ENDPOINT =
  '/api/team-frontend/delete-team';
const UPDATE_TEAM_PICTURE_ENDPOINT =
  '/api/team-frontend/update-team-picture';

export interface CreateTeamRequestBody {
  name: string;
  city: string;
  isMixTeam: boolean;
  trainingTime?: string;
  aboutUs: string;
  contact: string[];
}

export interface UpdateTeamRequestBody {
  teamId: number;
  name?: string;
  city?: string;
  isMixTeam?: boolean;
  trainingTime?: string;
  aboutUs?: string;
  contacts: string[];
}

export interface DeleteTeamRequestBody {
  teamId: number;
}

@Injectable({
  providedIn: 'root',
})
export class TeamService {

  @SingletonGetter()
  public get tournamentDetails$(): Observable<TournamentData | null> {
    return this.store$.select(tournamentDetailsSelector);
  }

  constructor(private readonly http: HttpClient, private readonly store$: Store) {}

  public create(request: CreateTeamRequestBody): Observable<void> {
    return this.http.post<void>(CREATE_TEAM_ENDPOINT, request);
  }

  public update(request: UpdateTeamRequestBody): Observable<void> {
    return this.http.put<void>(UPDATE_TEAM_ENDPOINT, request);
  }

  public delete(request: DeleteTeamRequestBody): Observable<void> {
    return this.http.delete<void>(DELETE_TEAM_ENDPOINT, {
      body: request,
    });
  }

  public async updatePicture(file: File): Promise<void> {
    const base64 = await this.fileToBase64(file);
    const request = {
      picture: base64,
    };

    await firstValueFrom(
      this.http.put<void>(UPDATE_TEAM_PICTURE_ENDPOINT, request)
    );
  }

  public getPictureUrl(teamId: number): string {
    return `/api/team-frontend/get-team-picture/${teamId}`;
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
