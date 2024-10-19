import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IconAlarmClockComponent } from './icon-alarm-clock.component';

describe('IconArrowComponent', () => {
  let component: IconAlarmClockComponent;
  let fixture: ComponentFixture<IconAlarmClockComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [IconAlarmClockComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconAlarmClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
