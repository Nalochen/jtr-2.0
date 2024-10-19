import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IconCircleComponent } from './icon-circle.component';

describe('IconFilterCircleComponent', () => {
  let component: IconCircleComponent;
  let fixture: ComponentFixture<IconCircleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [IconCircleComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
