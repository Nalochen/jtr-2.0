import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IconCopyComponent } from './icon-copy.component';

describe('IconCopyComponent', () => {
  let component: IconCopyComponent;
  let fixture: ComponentFixture<IconCopyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [IconCopyComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
