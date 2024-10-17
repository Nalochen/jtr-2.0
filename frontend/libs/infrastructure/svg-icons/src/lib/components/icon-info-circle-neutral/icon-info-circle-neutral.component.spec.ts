import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IconInfoCircleNeutralComponent } from './icon-info-circle-neutral.component';

describe('IconInfoCircleNeutralComponent', () => {
  let component: IconInfoCircleNeutralComponent;
  let fixture: ComponentFixture<IconInfoCircleNeutralComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [IconInfoCircleNeutralComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconInfoCircleNeutralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
