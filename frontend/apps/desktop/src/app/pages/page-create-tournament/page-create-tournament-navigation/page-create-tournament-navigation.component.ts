import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'page-create-tournament-navigation',
  standalone: true,
  imports: [
    CommonModule,
    TranslatePipe
  ],
  templateUrl: './page-create-tournament-navigation.component.html',
  styleUrl: './page-create-tournament-navigation.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageCreateTournamentNavigationComponent {}
