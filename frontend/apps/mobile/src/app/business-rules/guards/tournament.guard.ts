import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class TournamentGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  public canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const tournamentId = route.params['tournamentId'];

    return this.authService.isAdminOfOrganizer(tournamentId).pipe(
      map((isAdmin: boolean) => {
        if (isAdmin) {
          return true;
        } else {
          this.router.navigate([`/tournament-details/${tournamentId}`]);

          return false;
        }
      }),
      catchError(() => {
        this.router.navigate([`/tournament-details/${tournamentId}`]);

        return [false];
      })
    );
  }
}
