import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IconTimelineCircleComponent } from './icon-timeline-circle.component';

describe('IconTimelineCircleComponent', () => {
  let component: IconTimelineCircleComponent;
  let fixture: ComponentFixture<IconTimelineCircleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [IconTimelineCircleComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconTimelineCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
