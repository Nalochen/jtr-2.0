import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnDestroy,
  output
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { TeamDataService } from '@jtr/business-domain/team';
import { TournamentTeamData } from '@jtr/data-domain/store';

import {
  ButtonColorEnum,
  ButtonComponent,
  ButtonFunctionType,
  ButtonTypeEnum,
} from '../../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';


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
  providers: [
    TeamDataService,
  ],
  templateUrl: './submit-area.component.html',
  styleUrl: './submit-area.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubmitAreaComponent implements OnDestroy {
  private readonly teamDataService = inject(TeamDataService);
  public readonly destroy$ = new Subject<void>()

  public readonly allTeams$ = this.teamDataService.teams$;

  public readonly saveForm = output<void>();
  public readonly ButtonColorEnum = ButtonColorEnum;
  public readonly ButtonTypeEnum = ButtonTypeEnum;
  public readonly ButtonFunctionTypeEnum = ButtonFunctionType;

  public addTeamVisible = false;
  public selectedTeam: TournamentTeamData | null = null;

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

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
