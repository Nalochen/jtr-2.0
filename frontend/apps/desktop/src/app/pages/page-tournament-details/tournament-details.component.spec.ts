import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TournamentDetailsComponent } from './tournament-details.component';

describe('TournamentDetailsComponent', () => {
  let component: TournamentDetailsComponent;
  let fixture: ComponentFixture<TournamentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TournamentDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TournamentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
