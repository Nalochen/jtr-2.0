import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IconInfoCircleComponent } from './icon-info-circle.component';

describe('IconInfoCircleComponent', () => {
  let component: IconInfoCircleComponent;
  let fixture: ComponentFixture<IconInfoCircleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [IconInfoCircleComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconInfoCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
