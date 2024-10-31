import { Route } from '@angular/router';

import { PageTournamentDetailsComponent } from './pages/page-tournament-details/page-tournament-details.component';
import { PageTournamentOverviewComponent } from './pages/page-tournament-overview/page-tournament-overview.component';

export const appRoutes: Route[] = [
  { path: 'tournament-details', component: PageTournamentDetailsComponent },
  { path: 'tournaments-overview', component: PageTournamentOverviewComponent },
];
