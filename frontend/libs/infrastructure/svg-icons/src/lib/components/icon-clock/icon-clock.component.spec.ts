import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IconClockComponent } from './icon-clock.component';

describe('IconClockComponent', () => {
  let component: IconClockComponent;
  let fixture: ComponentFixture<IconClockComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [IconClockComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
