import {CommonModule, NgOptimizedImage} from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { Subject, takeUntil } from 'rxjs';

import {
  EditTeamForm
} from '../../../../../../../libs/business-domain/team/src/lib/form-controls/edit-team-form.control';
import { TeamInformationAboutUsComponent } from '../team-information-about-us/team-information-about-us.component';
import { TeamInformationContactsComponent } from '../team-information-contacts/team-information-contacts.component';
import { TeamInformationTrainingComponent } from '../team-information-training/team-information-training.component';

@Component({
  selector: 'team-information',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, TeamInformationTrainingComponent, TeamInformationContactsComponent, TeamInformationAboutUsComponent, ReactiveFormsModule],
  templateUrl: './team-information.component.html',
  styleUrl: './team-information.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamInformationComponent implements OnInit {
  @Input() public form!: FormGroup<EditTeamForm>;
  private readonly destroy$ = new Subject<void>();

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  public ngOnInit(): void {
    this.form.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.changeDetectorRef.markForCheck();
    });
  }
}
