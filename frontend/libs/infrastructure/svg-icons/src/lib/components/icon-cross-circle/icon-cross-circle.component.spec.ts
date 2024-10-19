import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IconCrossCircleComponent } from './icon-cross-circle.component';

describe('IconCrossCircleComponent', () => {
  let component: IconCrossCircleComponent;
  let fixture: ComponentFixture<IconCrossCircleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [IconCrossCircleComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconCrossCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
