import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'page-create-tournament-navigation',
  standalone: true,
  imports: [
    CommonModule,
    TranslatePipe
  ],
  templateUrl: './page-create-tournament-navigation.component.html',
  styleUrl: './page-create-tournament-navigation.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageCreateTournamentNavigationComponent {}
