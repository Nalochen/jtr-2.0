import { CommonModule, NgOptimizedImage } from '@angular/common';
import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';

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
import {
  TournamentInformationAdditionalComponent
} from '../tournament-information-additional/tournament-information-additional.component';
import {
  TournamentInformationContactsComponent
} from '../tournament-information-contacts/tournament-information-contacts.component';
import {
  TournamentInformationLocationComponent
} from '../tournament-information-location/tournament-information-location.component';
import {
  TournamentInformationRulesComponent
} from '../tournament-information-rules/tournament-information-rules.component';
import { TournamentTeamsComponent } from '../tournament-teams/tournament-teams.component';

export interface Panel {
  id: string;
  isOpen: boolean;
}

export enum PanelTypes {
  Teams = 'teams',
  Registration = 'registration',
  Contacts = 'contacts',
  Location = 'location',
  Rules = 'rules',
  Additional = 'additional'
}

@Component({
  selector: 'tournament-information',
  standalone: true,
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
    ChipComponent,
    TournamentInformationAdditionalComponent,
    TournamentInformationContactsComponent,
    TournamentInformationRulesComponent,
    TournamentInformationLocationComponent
  ],
  templateUrl: './tournament-information.component.html',
  styleUrl: './tournament-information.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TournamentInformationComponent implements OnInit{
  constructor(private cdr: ChangeDetectorRef) {}

  @Input() public tournament!: TournamentData;

  protected panels: Panel[] = [
    { id: PanelTypes.Teams, isOpen: false },
    { id: PanelTypes.Registration, isOpen: false },
    { id: PanelTypes.Contacts, isOpen: false },
    { id: PanelTypes.Location, isOpen: false },
    { id: PanelTypes.Rules, isOpen: false },
    { id: PanelTypes.Additional, isOpen: false },
  ];

  public readonly color = ButtonColorEnum.Secondary;
  public readonly size = ButtonSizeEnum.FitContent;
  public readonly PanelTypes = PanelTypes;

  public previewTeams: TeamData[] = [];

  public ngOnInit(): void {
    this.previewTeams = this.tournament.teams.participating.slice(0, 6)
  }

  public get areAllPanelsOpen(): boolean {
    return this.panels.every(panel => panel.isOpen);
  }

  protected toggleAllPanels(): void {
    const shouldOpenAll = !this.areAllPanelsOpen;

    this.panels.forEach((panel) => {
      panel.isOpen = shouldOpenAll;
    });

    this.cdr.detectChanges();
  }

  protected togglePanel(panelId: string, isOpen: boolean): void {
    const panel = this.panels.find((panel: Panel) => panel.id === panelId);

    if (panel && panel.isOpen !== isOpen) {
      panel.isOpen = isOpen;
    }

    this.cdr.detectChanges();
  }
}
