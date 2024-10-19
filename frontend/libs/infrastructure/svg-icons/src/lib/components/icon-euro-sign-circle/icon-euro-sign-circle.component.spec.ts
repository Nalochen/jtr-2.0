import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IconEuroSignCircleComponent } from './icon-euro-sign-circle.component';

describe('IconEuroSignCircleComponent', () => {
  let component: IconEuroSignCircleComponent;
  let fixture: ComponentFixture<IconEuroSignCircleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [IconEuroSignCircleComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconEuroSignCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
