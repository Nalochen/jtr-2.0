import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageCreateTournamentInformationRulesComponent } from './page-create-tournament-information-rules.component';

describe('PageCreateTournamentInformationRulesComponent', () => {
  let component: PageCreateTournamentInformationRulesComponent;
  let fixture: ComponentFixture<PageCreateTournamentInformationRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCreateTournamentInformationRulesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      PageCreateTournamentInformationRulesComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
