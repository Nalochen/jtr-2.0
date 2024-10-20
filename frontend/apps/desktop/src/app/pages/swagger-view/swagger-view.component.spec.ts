import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SwaggerViewComponent } from './swagger-view.component';

describe('SwaggerUiComponent', () => {
  let component: SwaggerViewComponent;
  let fixture: ComponentFixture<SwaggerViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwaggerViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SwaggerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
