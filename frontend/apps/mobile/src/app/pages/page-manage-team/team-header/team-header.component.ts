import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamHeaderComponent implements OnChanges {
  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly teamService: TeamService
  ) {}

  @Input() public form!: FormGroup<EditTeamForm>;
  @Input() public logo?: string;

  public logoUrl?: string;

  protected readonly ButtonColorEnum = ButtonColorEnum;
  protected readonly ButtonTypeEnum = ButtonTypeEnum;

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['logo']) {
      this.logoUrl = this.logo ? this.teamService.getPictureUrl(this.logo) : '';
      this.changeDetectorRef.markForCheck();
    }
  }

  public async onFileSelected(event: Event): Promise<void> {
    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length <= 0) {
      return;
    }

    const selectedFile = input.files[0];

    this.logoUrl = this.teamService.getPictureUrl(
      (await this.teamService.updatePicture(selectedFile)).logo
    );
    this.changeDetectorRef.markForCheck();
  }
}
