import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IconExpandArrowComponent } from './icon-expand-arrow.component';

describe('IconExpandArrowComponent', () => {
  let component: IconExpandArrowComponent;
  let fixture: ComponentFixture<IconExpandArrowComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [IconExpandArrowComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconExpandArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
