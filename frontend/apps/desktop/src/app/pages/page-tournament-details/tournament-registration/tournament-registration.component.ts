import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import {
  ButtonColorEnum,
  ButtonComponent,
  ButtonTypeEnum,
} from '../../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

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
    DropdownModule
  ],
  templateUrl: './tournament-registration.component.html',
  styleUrl: './tournament-registration.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TournamentRegistrationComponent implements OnInit {
  @Input() public registrationOpenAt!: string;

  protected readonly ButtonColorEnum = ButtonColorEnum;
  protected readonly ButtonTypeEnum = ButtonTypeEnum;

  protected dialogVisible = false;
  protected teams = [
    { name: 'Rigor Mortis' },
    { name: 'The Walking Dead' },
    { name: 'The Living Dead' },
    { name: 'Cranium Ex Machina' },
    { name: 'Leipziger Partyhände'}
  ];
  protected selectedTeam: Team | undefined;
  protected form = new FormArray<FormGroup<{
    name: FormControl<string | null>;
  }>>([]);

  ngOnInit() {
    this.teams.forEach((team) => {
      this.form.push(
        new FormGroup({
          name: new FormControl(team.name)
        })
      );
    });
  }

  public onShowDialog(): void {
    this.dialogVisible = true;
  }

  public onRegistrationClick(): void {
    this.dialogVisible = false;
    window.alert('Registration clicked');
  }
}
