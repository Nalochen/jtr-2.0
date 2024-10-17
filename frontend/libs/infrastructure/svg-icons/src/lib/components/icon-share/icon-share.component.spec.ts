import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconShareComponent } from './icon-share.component';

describe('IconShareComponent', () => {
  let component: IconShareComponent;
  let fixture: ComponentFixture<IconShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconShareComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
