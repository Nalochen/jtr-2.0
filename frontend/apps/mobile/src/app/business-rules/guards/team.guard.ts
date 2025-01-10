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
    const escapedName = route.params['escapedName'];

    return this.authService.isAdminOfTeam(escapedName).pipe(
      map((isAdmin: boolean) => {
        if (isAdmin) {
          return true;
        } else {
          this.router.navigate(['team-details', escapedName]);

          return false;
        }
      }),
      catchError(() => {
        this.router.navigate(['team-details', escapedName]);

        return [false];
      })
    );
  }
}
