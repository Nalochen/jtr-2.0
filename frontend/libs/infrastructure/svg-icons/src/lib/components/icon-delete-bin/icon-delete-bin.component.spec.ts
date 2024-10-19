import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IconDeleteBinComponent } from './icon-delete-bin.component';

describe('IconDeleteBinComponent', () => {
  let component: IconDeleteBinComponent;
  let fixture: ComponentFixture<IconDeleteBinComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [IconDeleteBinComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconDeleteBinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
