import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IconLockOutlineComponent } from './icon-lock-outline.component';

describe('IconLockOutlineComponent', () => {
  let component: IconLockOutlineComponent;
  let fixture: ComponentFixture<IconLockOutlineComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [IconLockOutlineComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconLockOutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
