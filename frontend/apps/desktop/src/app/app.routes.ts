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
import {
  UserDetailsResolver,
  UserOverviewResolver,
} from '@jtr/business-domain/user';

import { TeamGuard } from './business-rules/guards/team.guard';
import { TournamentGuard } from './business-rules/guards/tournament.guard';

import { PageCreateTournamentComponent } from './pages/page-create-tournament/page-create-tournament.component';
import { PageEnterResultsComponent } from './pages/page-enter-results/page-enter-results.component';
import { PageManageParticipatingTeamsComponent } from './pages/page-manage-participating-teams/page-manage-participating-teams.component';
import { PageManageTeamDetailsComponent } from './pages/page-manage-team/page-manage-team-details.component';
import { PageManageTournamentComponent } from './pages/page-manage-tournament/page-manage-tournament.component';
import { PageManageUserDetailsComponent } from './pages/page-manage-user-details/page-manage-user-details.component';
import { PageOutlineDemoComponent } from './pages/page-outline-demo/page-outline-demo.component';
import { PageRegisterComponent } from './pages/page-register/page-register.component';
import { PageTeamDetailsComponent } from './pages/page-team-details/page-team-details.component';
import { PageTeamOverviewComponent } from './pages/page-team-overview/page-team-overview.component';
import { PageTournamentDetailsComponent } from './pages/page-tournament-details/page-tournament-details.component';
import { PageTournamentOverviewComponent } from './pages/page-tournament-overview/page-tournament-overview.component';
import { PageTournamentOverviewPreviousComponent } from './pages/page-tournament-overview-previous/page-tournament-overview-previous.component';
import { PageUserDetailsComponent } from './pages/page-user-details/page-user-details.component';
import { SwaggerViewComponent } from './pages/swagger-view/swagger-view.component';

export const appRoutes: Route[] = [
  {
    path: 'team-details/:escapedName',
    component: PageTeamDetailsComponent,
    resolve: {
      teamDetails: TeamDetailsResolver,
    },
  },
  {
    path: 'manage-team-details/:escapedName',
    component: PageManageTeamDetailsComponent,
    resolve: {
      manageTeamDetails: ManageTeamDetailsResolver,
      userOverview: UserOverviewResolver,
    },
    canActivate: [TeamGuard],
  },
  {
    path: 'teams-overview',
    component: PageTeamOverviewComponent,
    resolve: {
      teamOverview: TeamOverviewResolver,
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
    path: 'tournaments-overview/previous',
    component: PageTournamentOverviewPreviousComponent,
    resolve: {
      tournamentOverview: TournamentOverviewResolver,
    },
  },
  {
    path: 'create-tournament/tournament-information',
    component: PageCreateTournamentComponent,
  },
  {
    path: 'manage-tournament/tournament-information/:tournamentId',
    component: PageCreateTournamentComponent,
    resolve: {
      tournamentDetails: TournamentDetailsResolver,
    },
    canActivate: [TournamentGuard],
  },
  {
    path: 'manage-tournament/:tournamentId',
    component: PageManageTournamentComponent,
    resolve: {
      tournamentDetails: TournamentDetailsResolver,
    },
    canActivate: [TournamentGuard],
  },
  {
    path: 'manage-tournament/enter-results/:tournamentId',
    component: PageEnterResultsComponent,
    resolve: {
      tournamentDetails: TournamentDetailsResolver,
    },
    canActivate: [TournamentGuard],
  },
  {
    path: 'manage-tournament/participating-teams/:tournamentId',
    component: PageManageParticipatingTeamsComponent,
    resolve: {
      tournamentDetails: TournamentDetailsResolver,
      teamDetails: TeamOverviewResolver,
    },
    canActivate: [TournamentGuard],
  },
  {
    path: 'register',
    component: PageRegisterComponent,
  },
  {
    path: 'user-details',
    component: PageUserDetailsComponent,
    resolve: {
      userDetails: UserDetailsResolver,
    },
  },
  {
    path: 'user-details/:escapedUsername',
    component: PageUserDetailsComponent,
    resolve: {
      userDetails: UserDetailsResolver,
    },
  },
  {
    path: 'manage-user-details',
    component: PageManageUserDetailsComponent,
    resolve: {
      userDetails: UserDetailsResolver,
    },
  },
  {
    path: 'outline-demo',
    component: PageOutlineDemoComponent,
  },
  {
    path: 'swagger',
    component: SwaggerViewComponent,
  },
  {
    path: '**',
    redirectTo: 'tournaments-overview',
  },
];
