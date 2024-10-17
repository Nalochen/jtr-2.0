import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IconCloseComponent } from './icon-close.component';

describe('IconCloseComponent', () => {
  let component: IconCloseComponent;
  let fixture: ComponentFixture<IconCloseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [IconCloseComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
