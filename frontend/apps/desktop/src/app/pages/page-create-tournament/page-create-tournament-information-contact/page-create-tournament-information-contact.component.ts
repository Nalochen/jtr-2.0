import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  ContactInformationForm,
} from '../../../../../../../libs/business-domain/tournament/src/lib/form-controls/create-tournament-form.control';
import { ButtonComponent, DataContainerRowComponent, InfoButtonComponent } from '../../../ui-shared';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { Subject, takeUntil } from 'rxjs';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'page-create-tournament-information-contact',
  standalone: true,
  imports: [
    CommonModule,
    DataContainerRowComponent,
    InputTextModule,
    InputTextareaModule,
    ReactiveFormsModule,
    InfoButtonComponent,
    ButtonComponent,
    TranslatePipe
  ],
  templateUrl: './page-create-tournament-information-contact.component.html',
  styleUrl: './page-create-tournament-information-contact.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageCreateTournamentInformationContactComponent implements OnInit {
  @Input() form!: FormGroup<ContactInformationForm>;
  private readonly destroy$ = new Subject<void>();

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  public ngOnInit(): void {
    this.form.controls.schedule.setValue('Pompfencheck\n' +
      '  Freitag: Von, bis (Ort: Bei Übernachtungsort?)\n' +
      '  Samstag Von, bis (Ort: Bei Turnierort?)\n' +
      'Spielzeit\n' +
      '  Samstag Ansage: , Spielbeginn: , Spielende: 18:00\n' +
      '  Sonntag Spielbeginn: , Spielende  ')
    this.form.controls.contacts.push(new FormControl(''));
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
