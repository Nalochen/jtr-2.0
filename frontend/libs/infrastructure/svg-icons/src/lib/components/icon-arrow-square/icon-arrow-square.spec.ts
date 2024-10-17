import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IconArrowSquareComponent } from './icon-arrow-square.component';

describe('IconArrowSquareComponent', () => {
  let component: IconArrowSquareComponent;
  let fixture: ComponentFixture<IconArrowSquareComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [IconArrowSquareComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconArrowSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
