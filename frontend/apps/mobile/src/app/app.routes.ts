import { Route } from '@angular/router';

import { TournamentDetailsComponent } from './pages/page-tournament-details/tournament-details.component';
import { TournamentOverviewComponent } from './pages/page-tournament-overview/tournament-overview.component';
export const appRoutes: Route[] = [
  { path: 'tournament-details', component: TournamentDetailsComponent },
  { path: 'tournaments-overview', component: TournamentOverviewComponent },
];
