import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IconTickCircleNeutralComponent } from './icon-tick-circle-neutral.component';

describe('IconTickCircleNeutralComponent', () => {
  let component: IconTickCircleNeutralComponent;
  let fixture: ComponentFixture<IconTickCircleNeutralComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [IconTickCircleNeutralComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconTickCircleNeutralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
