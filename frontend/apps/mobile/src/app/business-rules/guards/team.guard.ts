import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class TeamGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  public canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const teamId = route.params['teamId'];

    return this.authService.isAdminOfTeam(teamId).pipe(
      map((isAdmin: boolean) => {
        if (isAdmin) {
          return true;
        } else {
          this.router.navigate([`/team-details/${teamId}`]);

          return false;
        }
      }),
      catchError(() => {
        this.router.navigate([`/team-details/${teamId}`]);

        return [false];
      })
    );
  }
}
