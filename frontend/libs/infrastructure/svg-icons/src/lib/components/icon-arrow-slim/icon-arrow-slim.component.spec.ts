import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconArrowSlimComponent } from './icon-arrow-slim.comonent';

describe('IconArrowSlimComponent', () => {
  let component: IconArrowSlimComponent;
  let fixture: ComponentFixture<IconArrowSlimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconArrowSlimComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconArrowSlimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
