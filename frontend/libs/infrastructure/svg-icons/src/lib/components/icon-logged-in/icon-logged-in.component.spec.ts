import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IconLoggedInComponent } from './icon-logged-in.component';

describe('IconLoggedInComponent', () => {
  let component: IconLoggedInComponent;
  let fixture: ComponentFixture<IconLoggedInComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [IconLoggedInComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconLoggedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
