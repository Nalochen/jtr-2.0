import { CommonModule, NgOptimizedImage } from '@angular/common';
import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input} from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';

import {TeamData, TournamentData} from '@jtr/data-domain/store';

import { ButtonColorEnum, ButtonSizeEnum } from '../../../infrastructure/button-style/button-style.enum';

import {
  ButtonComponent,
  ChipComponent,
  DataContainerComponent,
  DataContainerRowComponent,
  InfoButtonComponent,
  TeamComponent
} from '../../../ui-shared';
import { TournamentTeamsComponent } from '../tournament-teams/tournament-teams.component';

@Component({
  selector: 'tournament-information',
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
    TeamComponent,
    ChipComponent
  ],
  templateUrl: './tournament-information.component.html',
  styleUrl: './tournament-information.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TournamentInformationComponent {
  @Input() public tournament!: TournamentData;

  protected panels = [
    { id: 'teams', isOpen: false },
    { id: 'registration', isOpen: false },
    { id: 'contacts', isOpen: false },
    { id: 'address', isOpen: false },
    { id: 'tournamentSystem', isOpen: false },
    { id: 'other', isOpen: false },
  ];

  public readonly color = ButtonColorEnum.Secondary;
  public readonly size = ButtonSizeEnum.FitContent;

  public previewTeams: TeamData[] = this.tournament.teams.participating.slice(0, 6);

  public get areAllPanelsOpen(): boolean {
    return this.panels.every(panel => panel.isOpen);
  }

  constructor(private cdr: ChangeDetectorRef) {}

  protected toggleAllPanels(): void {
    const shouldOpenAll = !this.areAllPanelsOpen;

    this.panels.forEach((panel) => {
      panel.isOpen = shouldOpenAll;
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
