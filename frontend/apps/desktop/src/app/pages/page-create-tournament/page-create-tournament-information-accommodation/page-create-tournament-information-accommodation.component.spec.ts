import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCreateTournamentInformationAccommodationComponent } from './page-create-tournament-information-accommodation.component';

describe('PageCreateTournamentInformationAccommodationComponent', () => {
  let component: PageCreateTournamentInformationAccommodationComponent;
  let fixture: ComponentFixture<PageCreateTournamentInformationAccommodationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCreateTournamentInformationAccommodationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      PageCreateTournamentInformationAccommodationComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
