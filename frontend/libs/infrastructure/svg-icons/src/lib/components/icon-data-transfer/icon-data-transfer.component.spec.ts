import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IconDataTransferComponent } from './icon-data-transfer.component';

describe('IconDataTransferComponent', () => {
  let component: IconDataTransferComponent;
  let fixture: ComponentFixture<IconDataTransferComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [IconDataTransferComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconDataTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
