import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataContainerRowComponent } from './data-container-row.component';

describe('ButtonComponent', () => {
  let component: DataContainerRowComponent;
  let fixture: ComponentFixture<DataContainerRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataContainerRowComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DataContainerRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
