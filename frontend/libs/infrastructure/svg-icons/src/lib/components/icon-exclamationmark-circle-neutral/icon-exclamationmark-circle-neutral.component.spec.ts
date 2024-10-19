import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IconExclamationmarkCircleNeutralComponent } from './icon-exclamationmark-circle-neutral.component';

describe('IconExclamationmarkCircleOutlineComponent', () => {
  let component: IconExclamationmarkCircleNeutralComponent;
  let fixture: ComponentFixture<IconExclamationmarkCircleNeutralComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [IconExclamationmarkCircleNeutralComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(
      IconExclamationmarkCircleNeutralComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
