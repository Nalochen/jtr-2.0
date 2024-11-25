import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCreateTournamentSubmitComponent } from './page-create-tournament-submit.component';

describe('PageCreateTournamentSubmitComponent', () => {
  let component: PageCreateTournamentSubmitComponent;
  let fixture: ComponentFixture<PageCreateTournamentSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCreateTournamentSubmitComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PageCreateTournamentSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
