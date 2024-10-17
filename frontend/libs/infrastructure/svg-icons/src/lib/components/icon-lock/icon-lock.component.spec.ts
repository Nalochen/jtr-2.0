import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IconLockComponent } from './icon-lock.component';

describe('IconLockComponent', () => {
  let component: IconLockComponent;
  let fixture: ComponentFixture<IconLockComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [IconLockComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconLockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
