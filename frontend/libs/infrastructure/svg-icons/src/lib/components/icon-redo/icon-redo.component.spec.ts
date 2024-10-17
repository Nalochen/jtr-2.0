import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IconRedoComponent } from './icon-redo.component';

describe('IconRedoComponent', () => {
  let component: IconRedoComponent;
  let fixture: ComponentFixture<IconRedoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [IconRedoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconRedoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
