import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IconArrowCircleComponent } from './icon-arrow-circle.component';

describe('IconArrowCircleComponent', () => {
  let component: IconArrowCircleComponent;
  let fixture: ComponentFixture<IconArrowCircleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [IconArrowCircleComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconArrowCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
