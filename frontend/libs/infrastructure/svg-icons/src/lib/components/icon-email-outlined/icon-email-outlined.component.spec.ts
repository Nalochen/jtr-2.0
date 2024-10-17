import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IconEmailOutlinedComponent } from './icon-email-outlined.component';

describe('IconEmailOutlinedComponent', () => {
  let component: IconEmailOutlinedComponent;
  let fixture: ComponentFixture<IconEmailOutlinedComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [IconEmailOutlinedComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconEmailOutlinedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
