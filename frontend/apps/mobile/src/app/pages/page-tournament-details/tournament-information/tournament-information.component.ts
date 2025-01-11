import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

import { TournamentData, TournamentTeamData } from '@jtr/data-domain/store';

import {
  ButtonColorEnum,
  ButtonComponent,
  ButtonTypeEnum,
  ChipComponent,
  DataContainerExpandableComponent,
  DataContainerRowComponent,
  InfoButtonComponent,
  TeamComponent,
} from '../../../ui-shared';
import { TournamentInformationAdditionalComponent } from '../tournament-information-additional/tournament-information-additional.component';
import { TournamentInformationContactsComponent } from '../tournament-information-contacts/tournament-information-contacts.component';
import { TournamentInformationLocationComponent } from '../tournament-information-location/tournament-information-location.component';
import {
  TournamentInformationRegistrationComponent
} from '../tournament-information-registration/tournament-information-registration.component';
import { TournamentInformationRulesComponent } from '../tournament-information-rules/tournament-information-rules.component';
import { TournamentTeamsComponent } from '../tournament-teams/tournament-teams.component';
import { TranslatePipe } from '@ngx-translate/core';
import { DividerModule } from 'primeng/divider';

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
  Additional = 'additional',
}

@Component({
  selector: 'tournament-information',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    DataContainerExpandableComponent,
    DataContainerRowComponent,
    MatIcon,
    MatButtonModule,
    ChipComponent,
    InfoButtonComponent,
    DividerModule,
    ButtonComponent,
    TournamentTeamsComponent,
    TeamComponent,
    ChipComponent,
    TournamentInformationAdditionalComponent,
    TournamentInformationContactsComponent,
    TournamentInformationRulesComponent,
    TournamentInformationLocationComponent,
    TournamentInformationRegistrationComponent,
    TranslatePipe,
  ],
  templateUrl: './tournament-information.component.html',
  styleUrl: './tournament-information.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TournamentInformationComponent implements OnInit {
  @Input() public tournament!: TournamentData;

  public readonly ButtonColorEnum = ButtonColorEnum;
  public readonly ButtonTypeEnum = ButtonTypeEnum;

  public readonly PanelTypes = PanelTypes;
  public previewTeams: TournamentTeamData[] = [];
  public showPlacement = false;

  protected panels: Panel[] = [
    { id: PanelTypes.Teams, isOpen: false },
    { id: PanelTypes.Registration, isOpen: false },
    { id: PanelTypes.Contacts, isOpen: false },
    { id: PanelTypes.Location, isOpen: false },
    { id: PanelTypes.Rules, isOpen: false },
    { id: PanelTypes.Additional, isOpen: false },
  ];

  constructor(private cdr: ChangeDetectorRef) {}

  public ngOnInit(): void {
    this.showPlacement = this.tournament.teams.participating.map((team) => team.placement).some((placement) => placement !== null);
    if (this.showPlacement) {
      this.previewTeams = [...this.tournament.teams.participating].sort((a, b) => a.placement - b.placement).slice(0, 6);
    } else {
      this.previewTeams = [...this.tournament.teams.participating].sort((a, b) => a.registrationOrder - b.registrationOrder).slice(0, 6);
    }
  }

  public get areAllPanelsOpen(): boolean {
    return this.panels.every((panel) => panel.isOpen);
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
