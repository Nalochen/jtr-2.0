import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IconCalenderComponent } from './icon-calender.component';

describe('IconCalenderComponent', () => {
  let component: IconCalenderComponent;
  let fixture: ComponentFixture<IconCalenderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [IconCalenderComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
