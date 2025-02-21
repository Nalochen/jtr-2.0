import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { EditTeamForm } from '@jtr/business-domain/team';

import { TeamService } from '../../../business-rules/team/team.service';

import {
  ButtonColorEnum,
  ButtonComponent,
  ButtonTypeEnum,
} from '../../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'team-header',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    InputSwitchModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonComponent,
    TranslatePipe,
  ],
  templateUrl: './team-header.component.html',
  styleUrl: './team-header.component.less',
})
export class TeamHeaderComponent {
  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly teamService: TeamService
  ) {}

  @Input() public form!: FormGroup<EditTeamForm>;
  @Input() public logoUrl?: string;
  @Input() public teamId?: number;

  protected readonly ButtonColorEnum = ButtonColorEnum;
  protected readonly ButtonTypeEnum = ButtonTypeEnum;

  public async onFileSelected(event: Event): Promise<void> {
    if (!this.teamId) {
      return;
    }

    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length <= 0) {
      return;
    }

    const selectedFile = input.files[0];

    this.logoUrl = await this.teamService.updatePicture(
      selectedFile,
      this.teamId
    );
    this.changeDetectorRef.detectChanges();
  }
}
