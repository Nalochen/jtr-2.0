import {CommonModule, NgOptimizedImage} from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

import { MatDividerModule } from '@angular/material/divider';

import { DataContainerComponent, DataContainerRowComponent } from '../../../ui-shared';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  EditTeamForm
} from '../../../../../../../libs/business-domain/team/src/lib/form-controls/edit-team-form.control';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'team-training',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, DataContainerComponent, DataContainerRowComponent, MatDividerModule, InputTextareaModule, ReactiveFormsModule],
  templateUrl: './team-information-training.component.html',
  styleUrl: './team-information-training.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamInformationTrainingComponent {
  @Input() public form!: FormGroup<EditTeamForm>;
  private readonly destroy$ = new Subject<void>();

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  public ngOnInit(): void {
    this.form.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.changeDetectorRef.markForCheck();
    });
  }
}
