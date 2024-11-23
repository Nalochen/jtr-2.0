import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageCreateTournamentNavigationComponent } from './page-create-tournament-navigation.component';

describe('PageCreateTournamentNavigationComponent', () => {
  let component: PageCreateTournamentNavigationComponent;
  let fixture: ComponentFixture<PageCreateTournamentNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCreateTournamentNavigationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PageCreateTournamentNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
