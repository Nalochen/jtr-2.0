import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IconSearchComponent } from './icon-search.component';

describe('IconSearchComponent', () => {
  let component: IconSearchComponent;
  let fixture: ComponentFixture<IconSearchComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [IconSearchComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
