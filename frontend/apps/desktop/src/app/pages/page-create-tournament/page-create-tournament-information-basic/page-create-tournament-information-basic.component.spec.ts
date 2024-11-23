import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageTournamentInformationBasicComponent } from './page-create-tournament-information-basic.component';

describe('PageTournamentInformationBasicComponent', () => {
  let component: PageTournamentInformationBasicComponent;
  let fixture: ComponentFixture<PageTournamentInformationBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageTournamentInformationBasicComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PageTournamentInformationBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
