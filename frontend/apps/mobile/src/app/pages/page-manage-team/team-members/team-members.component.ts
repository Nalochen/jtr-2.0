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

import { EditTeamForm } from '@jtr/business-domain/team';

import {
  DataContainerComponent,
  DataContainerRowComponent,
} from '../../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'team-members',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    DataContainerComponent,
    DataContainerRowComponent,
    ReactiveFormsModule,
    TranslatePipe,
  ],
  templateUrl: './team-members.component.html',
  styleUrl: './team-members.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamMembersComponent implements OnInit, OnDestroy {
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
