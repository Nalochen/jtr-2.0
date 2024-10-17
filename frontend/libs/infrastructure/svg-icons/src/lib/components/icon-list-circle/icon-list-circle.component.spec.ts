import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IconListCircleComponent } from './icon-list-circle.component';

describe('IconListCircleComponent', () => {
  let component: IconListCircleComponent;
  let fixture: ComponentFixture<IconListCircleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [IconListCircleComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconListCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
