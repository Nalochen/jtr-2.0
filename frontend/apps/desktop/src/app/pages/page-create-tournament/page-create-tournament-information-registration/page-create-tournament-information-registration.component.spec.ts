import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCreateTournamentInformationRegistrationComponent } from './page-create-tournament-information-registration.component';

describe('PageCreateTournamentInformationRegistrationComponent', () => {
  let component: PageCreateTournamentInformationRegistrationComponent;
  let fixture: ComponentFixture<PageCreateTournamentInformationRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCreateTournamentInformationRegistrationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      PageCreateTournamentInformationRegistrationComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
