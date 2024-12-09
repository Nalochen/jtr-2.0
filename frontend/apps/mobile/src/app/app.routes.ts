import { Route } from '@angular/router';

import {
  ManageTeamDetailsResolver,
  TeamDetailsResolver,
  TeamOverviewResolver,
} from '@jtr/business-domain/team';
import {
  TournamentDetailsResolver,
  TournamentOverviewResolver,
} from '@jtr/business-domain/tournament';
import { UserDetailsResolver } from '@jtr/business-domain/user';

import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageManageTeamDetailsComponent } from './pages/page-manage-team/page-manage-team-details.component';
import { PageRegisterComponent } from './pages/page-register/page-register.component';
import { PageTeamDetailsComponent } from './pages/page-team-details/page-team-details.component';
import { PageTeamOverviewComponent } from './pages/page-team-overview/page-team-overview.component';
import { PageTournamentDetailsComponent } from './pages/page-tournament-details/page-tournament-details.component';
import { PageTournamentOverviewComponent } from './pages/page-tournament-overview/page-tournament-overview.component';
import { PageUserDetailsComponent } from './pages/page-user-details/page-user-details.component';

export const appRoutes: Route[] = [
  {
    path: 'team-details/:teamId',
    component: PageTeamDetailsComponent,
    resolve: {
      teamDetails: TeamDetailsResolver,
    },
  },
  {
    path: 'manage-team-details/:teamId',
    component: PageManageTeamDetailsComponent,
    resolve: {
      manageTeamDetails: ManageTeamDetailsResolver,
    },
  },
  {
    path: 'team-overview',
    component: PageTeamOverviewComponent,
    resolve: {
      teamDetails: TeamOverviewResolver,
    },
  },
  {
    path: 'tournament-details/:tournamentId',
    component: PageTournamentDetailsComponent,
    resolve: {
      tournamentDetails: TournamentDetailsResolver,
    },
  },
  {
    path: 'tournaments-overview',
    component: PageTournamentOverviewComponent,
    resolve: {
      tournamentOverview: TournamentOverviewResolver,
    },
  },
  {
    path: 'register',
    component: PageRegisterComponent,
  },
  {
    path: 'login',
    component: PageLoginComponent,
  },
  {
    path: 'user-details/:userId?',
    component: PageUserDetailsComponent,
    resolve: {
      userDetails: UserDetailsResolver,
    },
  },
  {
    path: '**',
    redirectTo: 'tournaments-overview',
  },
];
