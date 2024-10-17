import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IconQuestionmarkCircleComponent } from './icon-questionmark-circle.component';

describe('IconQuestionmarkCircleComponent', () => {
  let component: IconQuestionmarkCircleComponent;
  let fixture: ComponentFixture<IconQuestionmarkCircleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [IconQuestionmarkCircleComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconQuestionmarkCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
