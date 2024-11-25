import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { Subject, takeUntil } from 'rxjs';

import { EditTeamForm } from '../../../../../../../libs/business-domain/team/src/lib/form-controls/edit-team-form.control';
import {
  ButtonComponent,
  DataContainerComponent,
  DataContainerRowComponent,
} from '../../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'team-contacts',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    DataContainerRowComponent,
    DataContainerComponent,
    InputTextModule,
    ButtonComponent,
    ReactiveFormsModule,
    TranslatePipe
  ],
  templateUrl: './team-information-contacts.component.html',
  styleUrl: './team-information-contacts.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamInformationContactsComponent implements OnInit, OnDestroy {
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

  public onNewContact(): void {
    this.form.controls.contacts.push(new FormControl(''));
  }

  public onRemoveContact(index: number): void {
    this.form.controls.contacts.removeAt(index);
  }
}
