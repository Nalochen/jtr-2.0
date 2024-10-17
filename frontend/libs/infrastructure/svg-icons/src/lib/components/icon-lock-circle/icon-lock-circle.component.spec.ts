import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IconLockCircleComponent } from './icon-lock-circle.component';

describe('IconLockCircleComponent', () => {
  let component: IconLockCircleComponent;
  let fixture: ComponentFixture<IconLockCircleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [IconLockCircleComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconLockCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
