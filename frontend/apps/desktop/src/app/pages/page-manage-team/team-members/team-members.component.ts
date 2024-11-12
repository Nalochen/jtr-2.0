import {CommonModule, NgOptimizedImage} from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

import { DataContainerComponent, DataContainerRowComponent } from '../../../ui-shared';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  EditTeamForm
} from '../../../../../../../libs/business-domain/team/src/lib/form-controls/edit-team-form.control';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'team-members',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, DataContainerComponent, DataContainerRowComponent, ReactiveFormsModule],
  templateUrl: './team-members.component.html',
  styleUrl: './team-members.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamMembersComponent {
  @Input() public form!: FormGroup<EditTeamForm>;

  private readonly destroy$ = new Subject<void>();

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  public ngOnInit(): void {
    this.form.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.changeDetectorRef.markForCheck();
    });
  }
}
