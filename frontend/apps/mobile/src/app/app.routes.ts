import { Route } from '@angular/router';

import {TeamDetailsResolver, TeamOverviewResolver} from '@jtr/business-domain/team';
import {TournamentDetailsResolver, TournamentOverviewResolver} from '@jtr/business-domain/tournament';

import {PageTeamDetailsComponent} from './pages/page-team-details/page-team-details.component';
import {PageTeamOverviewComponent} from './pages/page-team-overview/page-team-overview.component';
import { PageTournamentDetailsComponent } from './pages/page-tournament-details/page-tournament-details.component';
import { PageTournamentOverviewComponent } from './pages/page-tournament-overview/page-tournament-overview.component';

export const appRoutes: Route[] = [
  {
    path: 'team-details/:teamId',
    component: PageTeamDetailsComponent,
    resolve: {
      teamDetails: TeamDetailsResolver,
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
    path: '**',
    redirectTo: 'tournaments-overview',
  },
];
