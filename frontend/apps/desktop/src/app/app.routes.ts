import { Route } from '@angular/router';
import { TournamentOverviewComponent } from './pages/page-tournament-overview/tournament-overview.component';
import { TournamentDetailsComponent } from './pages/page-tournament-details/tournament-details.component';
import { PageOutlineDemoComponent } from './pages/page-outline-demo/page-outline-demo.component';
import { SwaggerViewComponent } from './pages/swagger-view/swagger-view.component';
import { TournamentOverviewResolver } from './resolvers/tournament-overview.resolver';
import { TournamentDetailsResolver } from './resolvers/tournament-details.resolver';

export const appRoutes: Route[] = [
  {
    path: 'tournament-details/:tournamentId',
    component: TournamentDetailsComponent,
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
