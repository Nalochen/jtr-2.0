import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IconTickComponent } from './icon-tick.component';

describe('IconCloseComponent', () => {
  let component: IconTickComponent;
  let fixture: ComponentFixture<IconTickComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [IconTickComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconTickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
