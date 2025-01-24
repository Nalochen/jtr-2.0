import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { Subject, takeUntil } from 'rxjs';

import { EditTeamForm } from '@jtr/business-domain/team';

import {
  DataContainerComponent,
  DataContainerRowComponent,
} from '../../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';
import { InputTextareaModule } from 'primeng/inputtextarea';

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
    TranslatePipe,
  ],
  templateUrl: './team-information-about-us.component.html',
  styleUrl: './team-information-about-us.component.less',
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
