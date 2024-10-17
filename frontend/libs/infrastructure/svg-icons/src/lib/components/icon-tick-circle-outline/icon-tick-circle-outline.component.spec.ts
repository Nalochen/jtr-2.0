import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IconTickCircleOutlineComponent } from './icon-tick-circle-outline.component';

describe('IconTickCircleComponent', () => {
  let component: IconTickCircleOutlineComponent;
  let fixture: ComponentFixture<IconTickCircleOutlineComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [IconTickCircleOutlineComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconTickCircleOutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
