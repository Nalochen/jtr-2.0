import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataContainerComponent } from './data-container.component';

describe('ButtonComponent', () => {
  let component: DataContainerComponent;
  let fixture: ComponentFixture<DataContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DataContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
