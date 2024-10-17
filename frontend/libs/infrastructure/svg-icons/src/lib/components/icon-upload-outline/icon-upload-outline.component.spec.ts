import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IconUploadOutlineComponent } from './icon-upload-outline.component';

describe('IconUploadOutlineComponent', () => {
  let component: IconUploadOutlineComponent;
  let fixture: ComponentFixture<IconUploadOutlineComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IconUploadOutlineComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconUploadOutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
