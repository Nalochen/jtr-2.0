import { Route } from '@angular/router';
import {TournamentOverviewComponent} from './pages/page-tournament-overview/tournament-overview.component';
import {TournamentDetailsComponent} from './pages/page-tournament-details/tournament-details.component';

export const appRoutes: Route[] = [{path: 'tournament-details', component: TournamentDetailsComponent}, {path: 'tournaments-overview', component: TournamentOverviewComponent} ];
