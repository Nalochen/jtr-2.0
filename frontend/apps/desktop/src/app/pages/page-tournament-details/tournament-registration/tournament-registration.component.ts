import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

import {
  ButtonColorEnum,
  ButtonComponent,
  ButtonTypeEnum,
} from '../../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { TournamentDataService } from '@jtr/business-domain/tournament';
import { ManageParticipationService } from '../../../business-rules/tournament/manage-participation.service';

export interface Team {
  name: string;
}

@Component({
  selector: 'tournament-registration',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    ButtonComponent,
    TranslatePipe,
    DialogModule,
    DropdownModule,
  ],
  templateUrl: './tournament-registration.component.html',
  styleUrl: './tournament-registration.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TournamentRegistrationComponent implements OnInit {
  @Input() public tournamentId!: number;
  @Input() public registrationStartDate!: string;

  protected readonly ButtonColorEnum = ButtonColorEnum;
  protected readonly ButtonTypeEnum = ButtonTypeEnum;

  protected dialogVisible = false;
  //add real teams
  protected teams = [
    { name: 'Rigor Mortis' },
    { name: 'The Walking Dead' },
    { name: 'The Living Dead' },
    { name: 'Cranium Ex Machina' },
    { name: 'Leipziger Partyhände' },
  ];
  protected selectedTeam: Team | undefined;
  protected form = new FormArray<
    FormGroup<{
      name: FormControl<string | null>;
    }>
  >([]);

  constructor(
    private readonly manageParticipationService: ManageParticipationService
  ) {}

  public ngOnInit() {
    this.teams.forEach((team) => {
      this.form.push(
        new FormGroup({
          name: new FormControl(team.name),
        })
      );
    });
  }

  public onShowDialog(): void {
    this.dialogVisible = true;
  }

  public onRegistrationClick(): void {
    this.dialogVisible = false;
    this.manageParticipationService.create({
      tournamentId: this.tournamentId,
      //add reals teams
      teamId: 1,
    })
  }
}
