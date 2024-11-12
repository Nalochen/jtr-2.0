import {CommonModule, NgOptimizedImage} from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';


import { DataContainerComponent, DataContainerRowComponent } from '../../../ui-shared';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  EditTeamForm
} from '../../../../../../../libs/business-domain/team/src/lib/form-controls/edit-team-form.control';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'team-about-us',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, DataContainerRowComponent, DataContainerComponent, InputTextareaModule, ReactiveFormsModule],
  templateUrl: './team-information-about-us.component.html',
  styleUrl: './team-information-about-us.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamInformationAboutUsComponent implements OnInit {
  @Input() public form!: FormGroup<EditTeamForm>;
  private readonly destroy$ = new Subject<void>();

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  public ngOnInit(): void {
    this.form.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.changeDetectorRef.markForCheck();
    });
  }
}
