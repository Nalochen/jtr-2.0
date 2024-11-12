import {CommonModule, NgOptimizedImage} from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { TeamData } from '@jtr/data-domain/store';

import { ButtonComponent, DataContainerComponent, DataContainerRowComponent } from '../../../ui-shared';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  EditTeamForm
} from '../../../../../../../libs/business-domain/team/src/lib/form-controls/edit-team-form.control';
import { InputTextModule } from 'primeng/inputtext';

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

  public onNewContact(): void {
    this.form.controls.contacts.push(new FormControl(''));
  }

  public onRemoveContact(index: number): void {
    this.form.controls.contacts.removeAt(index);
  }
}
