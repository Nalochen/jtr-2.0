import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IconTickCircleComponent } from './icon-tick-circle.component';

describe('IconTickCircleComponent', () => {
  let component: IconTickCircleComponent;
  let fixture: ComponentFixture<IconTickCircleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [IconTickCircleComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconTickCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
