import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IconQuestionmarkCircleNeutralComponent } from './icon-questionmark-circle-neutral.component';

describe('IconQuestionmarkCircleNeutralComponent', () => {
  let component: IconQuestionmarkCircleNeutralComponent;
  let fixture: ComponentFixture<IconQuestionmarkCircleNeutralComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [IconQuestionmarkCircleNeutralComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconQuestionmarkCircleNeutralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
