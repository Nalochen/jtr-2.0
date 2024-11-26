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

import { Subject, takeUntil } from 'rxjs';

import { EditTeamForm } from '../../../../../../../libs/business-domain/team/src/lib/form-controls/edit-team-form.control';
import {
  DataContainerComponent,
  DataContainerRowComponent,
} from '../../../ui-shared';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'team-about-us',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    DataContainerRowComponent,
    DataContainerComponent,
    InputTextareaModule,
    ReactiveFormsModule,
    TranslatePipe
  ],
  templateUrl: './team-information-about-us.component.html',
  styleUrl: './team-information-about-us.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamInformationAboutUsComponent implements OnInit, OnDestroy {
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
