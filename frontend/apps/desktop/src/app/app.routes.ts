import { Route } from '@angular/router';

import { PageOutlineDemoComponent } from './pages/page-outline-demo/page-outline-demo.component';
import { PageTournamentDetailsComponent } from './pages/page-tournament-details/page-tournament-details.component';
import { TournamentOverviewComponent } from './pages/page-tournament-overview/tournament-overview.component';
import { SwaggerViewComponent } from './pages/swagger-view/swagger-view.component';
import { TournamentDetailsResolver } from './resolvers/tournament-details.resolver';
import { TournamentOverviewResolver } from './resolvers/tournament-overview.resolver';

export const appRoutes: Route[] = [
  {
    path: 'tournament-details/:tournamentId',
    component: PageTournamentDetailsComponent,
    resolve: {
      tournamentDetails: TournamentDetailsResolver,
    },
  },
  {
    path: 'tournaments-overview',
    component: TournamentOverviewComponent,
    resolve: {
      tournamentOverview: TournamentOverviewResolver,
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
