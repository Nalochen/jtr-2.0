import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IconStoreIosComponent } from './icon-store-ios.component';

describe('IconStoreIosComponent', () => {
  let component: IconStoreIosComponent;
  let fixture: ComponentFixture<IconStoreIosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [IconStoreIosComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconStoreIosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
