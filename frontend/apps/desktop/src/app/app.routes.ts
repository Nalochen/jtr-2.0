import { Route } from '@angular/router';
import { TournamentOverviewComponent } from './pages/page-tournament-overview/tournament-overview.component';
import { TournamentDetailsComponent } from './pages/page-tournament-details/tournament-details.component';
import { PageOutlineDemoComponent } from './pages/page-outline-demo/page-outline-demo.component';
import { SwaggerViewComponent } from './pages/swagger-view/swagger-view.component';

export const appRoutes: Route[] = [
  {path: 'tournament-details', component: TournamentDetailsComponent},
  {path: 'tournaments-overview', component: TournamentOverviewComponent},

  { path: 'outline-demo', component: PageOutlineDemoComponent },
  {
    path: 'swagger',
    component: SwaggerViewComponent,
  }, ];
