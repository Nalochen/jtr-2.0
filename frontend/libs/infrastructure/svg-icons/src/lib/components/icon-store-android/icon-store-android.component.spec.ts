import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IconStoreAndroidComponent } from './icon-store-android.component';

describe('IconStoreAndroidComponent', () => {
  let component: IconStoreAndroidComponent;
  let fixture: ComponentFixture<IconStoreAndroidComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [IconStoreAndroidComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconStoreAndroidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
