import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IconEmailCircleComponent } from './icon-email-circle.component';

describe('IconEmailCircleComponent', () => {
  let component: IconEmailCircleComponent;
  let fixture: ComponentFixture<IconEmailCircleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [IconEmailCircleComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconEmailCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
