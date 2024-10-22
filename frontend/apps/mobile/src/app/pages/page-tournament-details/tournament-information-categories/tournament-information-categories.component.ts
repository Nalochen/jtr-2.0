import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  DataContainerComponent,
  DataContainerRowComponent,
  ChipComponent,
  InfoButtonComponent,
  ButtonComponent,
  TeamComponent
} from '../../../ui-shared';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { TournamentTeamsComponent } from '../teams/tournament-teams.component';

@Component({
  selector: 'tournament-information-categories',
  standalone: true,
  providers: [],
  imports: [
    CommonModule,
    NgOptimizedImage,
    DataContainerComponent,
    DataContainerRowComponent,
    MatIcon,
    MatButtonModule,
    ChipComponent,
    InfoButtonComponent,
    MatDividerModule,
    ButtonComponent,
    TournamentTeamsComponent,
    TeamComponent
  ],
  templateUrl: './tournament-information-categories.component.html',
  styleUrl: './tournament-information-categories.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TournamentInformationCategoriesComponent {
  protected panels = [
    { id: 'teams', isOpen: false },
    { id: 'registration', isOpen: false },
    { id: 'contacts', isOpen: false },
    { id: 'address', isOpen: false },
    { id: 'tournamentSystem', isOpen: false },
    { id: 'other', isOpen: false },
  ];

  public registeredTeams: string[] = [
    'Munich Monks',
    'Rigor Mortis',
    'Blue Fangs',
    'Jugger Helden Bamberg',
    'Flying Juggmen',
    'Juggernauts',
    'Aixcalibur',
    'Cranium Ex Machina',
    'Lahnveilchen Gießen',
    'Torpedo Bääm',
    'Zonenkinder',
  ];

  public reservedTeams: string[] = [
    'NLG',
    'Peters Pawns',
    'Quadratur des Kreises',
    'Quak Pack',
    'Leere Menge',
    'Rhein-Neckar-Donner',
  ];

  public previewTeams: string[] = this.registeredTeams.slice(0, 6);

  get areAllPanelsOpen(): boolean {
    return this.panels.every(panel => panel.isOpen);
  }

  constructor(private cdr: ChangeDetectorRef) {}

  protected toggleAllPanels(): void {
    const shouldOpenAll = !this.areAllPanelsOpen;
    this.panels.forEach((panel) => {
      panel.isOpen = shouldOpenAll;
      console.log(panel.id, panel.isOpen);
    });
    this.cdr.detectChanges();
  }

  protected togglePanel(panelId: string, isOpen: boolean): void {
    const panel = this.panels.find(panel => panel.id === panelId);
    if (panel && panel.isOpen !== isOpen) {
      panel.isOpen = isOpen;
    }
    this.cdr.detectChanges();
  }
}
