import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IconTipComponent } from './icon-tip.component';

describe('IconTipComponent', () => {
  let component: IconTipComponent;
  let fixture: ComponentFixture<IconTipComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [IconTipComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
