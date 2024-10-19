import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IconCrossCircleNeutralComponent } from './icon-cross-circle-neutral.component';

describe('IconCrossCircleNeutralComponent', () => {
  let component: IconCrossCircleNeutralComponent;
  let fixture: ComponentFixture<IconCrossCircleNeutralComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [IconCrossCircleNeutralComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconCrossCircleNeutralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
