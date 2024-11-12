import {CommonModule, NgOptimizedImage} from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

import { ButtonComponent, DataContainerComponent, DataContainerRowComponent } from '../../../ui-shared';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  EditTeamForm
} from '../../../../../../../libs/business-domain/team/src/lib/form-controls/edit-team-form.control';
import { InputTextModule } from 'primeng/inputtext';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'team-contacts',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, DataContainerRowComponent, DataContainerComponent, InputTextModule, ButtonComponent, ReactiveFormsModule],
  templateUrl: './team-information-contacts.component.html',
  styleUrl: './team-information-contacts.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamInformationContactsComponent {
  @Input() public form!: FormGroup<EditTeamForm>;
  private readonly destroy$ = new Subject<void>();

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  public ngOnInit(): void {
    this.form.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.changeDetectorRef.markForCheck();
    });
  }

  public onNewContact(): void {
    this.form.controls.contacts.push(new FormControl(''));
  }

  public onRemoveContact(index: number): void {
    this.form.controls.contacts.removeAt(index);
  }
}
