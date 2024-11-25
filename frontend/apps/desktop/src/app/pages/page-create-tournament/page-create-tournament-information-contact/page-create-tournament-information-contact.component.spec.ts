import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCreateTournamentInformationContactComponent } from './page-create-tournament-information-contact.component';

describe('PageCreateTournamentInformationContactComponent', () => {
  let component: PageCreateTournamentInformationContactComponent;
  let fixture: ComponentFixture<PageCreateTournamentInformationContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCreateTournamentInformationContactComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PageCreateTournamentInformationContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
