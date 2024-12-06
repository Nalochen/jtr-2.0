import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, input, output, Output } from '@angular/core';

import { TranslatePipe } from '@ngx-translate/core';
import {
  ButtonTypeEnum,
  ButtonColorEnum,
  ChipComponent,
  ButtonComponent,
  ButtonFunctionType
} from '../../../ui-shared';
import { TournamentTeamsComponent } from '../../page-tournament-details/tournament-teams/tournament-teams.component';
import { TeamOverviewData, TournamentTeamData } from '@jtr/data-domain/store';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'submit-area',
  standalone: true,
  imports: [
    CommonModule,
    TranslatePipe,
    ButtonComponent,
    DialogModule,
    DropdownModule,
    FormsModule
  ],
  templateUrl: './submit-area.component.html',
  styleUrl: './submit-area.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubmitAreaComponent {
  public readonly allTeams = input.required<TeamOverviewData[]>();
  public readonly saveForm = output<void>();

  public readonly ButtonColorEnum = ButtonColorEnum;
  public readonly ButtonTypeEnum = ButtonTypeEnum;
  public readonly ButtonFunctionTypeEnum = ButtonFunctionType;

  public addTeamVisible = false;
  public selectedTeam: TournamentTeamData | null = null;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  public openAddTeamOverlay(): void {
    this.addTeamVisible = true;
  }

  public closeAddTeamOverlay(): void {
    this.addTeamVisible = false;
    this.changeDetectorRef.markForCheck();
  }

  public addTeam(): void {
    if (!this.selectedTeam) {
      return;
    }
    // API aufrufen
    // Daten neu laden
  }

  public save(): void {
    this.saveForm.emit();
  }
}
