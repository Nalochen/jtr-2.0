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
  ButtonColorEnum,
  ButtonComponent,
  ButtonTypeEnum,
} from '../../../ui-shared';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { TranslatePipe } from '@ngx-translate/core';

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
    TranslatePipe
  ],
  templateUrl: './team-header.component.html',
  styleUrl: './team-header.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamHeaderComponent implements OnInit, OnDestroy {
  @Input() public form!: FormGroup<EditTeamForm>;
  private readonly destroy$ = new Subject<void>();
  protected readonly ButtonColorEnum = ButtonColorEnum;
  protected readonly ButtonTypeEnum = ButtonTypeEnum;

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

  public onChangeLogo() {
    window.alert('Change logo');
  }
}
