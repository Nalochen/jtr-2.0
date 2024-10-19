import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IconExclamationmarkCircleComponent } from './icon-exclamationmark-circle.component';

describe('IconExclamationmarkCircleComponent', () => {
  let component: IconExclamationmarkCircleComponent;
  let fixture: ComponentFixture<IconExclamationmarkCircleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [IconExclamationmarkCircleComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconExclamationmarkCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
