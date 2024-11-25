import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { MatDividerModule } from '@angular/material/divider';

import { Subject, takeUntil } from 'rxjs';

import { EditTeamForm } from '../../../../../../../libs/business-domain/team/src/lib/form-controls/edit-team-form.control';
import {
  DataContainerComponent,
  DataContainerRowComponent,
} from '../../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
  selector: 'team-training',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    DataContainerComponent,
    DataContainerRowComponent,
    MatDividerModule,
    InputTextareaModule,
    ReactiveFormsModule,
    TranslatePipe
  ],
  templateUrl: './team-information-training.component.html',
  styleUrl: './team-information-training.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamInformationTrainingComponent implements OnInit, OnDestroy {
  @Input() public form!: FormGroup<EditTeamForm>;
  private readonly destroy$ = new Subject<void>();

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  public ngOnInit(): void {
    this.form.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.changeDetectorRef.markForCheck();
    });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
