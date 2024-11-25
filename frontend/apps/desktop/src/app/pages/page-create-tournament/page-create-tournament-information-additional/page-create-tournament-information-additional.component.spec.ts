import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCreateTournamentInformationAdditionalComponent } from './page-create-tournament-information-additional.component';

describe('PageCreateTournamentInformationAdditionalComponent', () => {
  let component: PageCreateTournamentInformationAdditionalComponent;
  let fixture: ComponentFixture<PageCreateTournamentInformationAdditionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCreateTournamentInformationAdditionalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      PageCreateTournamentInformationAdditionalComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
