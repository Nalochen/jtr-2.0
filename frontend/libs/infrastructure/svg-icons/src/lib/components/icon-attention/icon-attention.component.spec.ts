import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IconAttentionComponent } from './icon-attention.component';

describe('IconAttentionComponent', () => {
  let component: IconAttentionComponent;
  let fixture: ComponentFixture<IconAttentionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [IconAttentionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconAttentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
