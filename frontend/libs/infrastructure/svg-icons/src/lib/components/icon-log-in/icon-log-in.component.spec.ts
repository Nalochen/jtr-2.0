import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IconLogInComponent } from './icon-log-in.component';

describe('IconLogInComponent', () => {
  let component: IconLogInComponent;
  let fixture: ComponentFixture<IconLogInComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [IconLogInComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
