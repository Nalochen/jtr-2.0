import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IconCaretComponent } from './icon-caret.component';

describe('IconCaretComponentComponent', () => {
  let component: IconCaretComponent;
  let fixture: ComponentFixture<IconCaretComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [IconCaretComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconCaretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
