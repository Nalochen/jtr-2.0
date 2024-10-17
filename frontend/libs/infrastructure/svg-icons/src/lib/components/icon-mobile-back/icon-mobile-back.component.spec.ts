import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IconMobileBackComponent } from './icon-mobile-back.component';

describe('IconMobileBackComponent', () => {
  let component: IconMobileBackComponent;
  let fixture: ComponentFixture<IconMobileBackComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [IconMobileBackComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconMobileBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
