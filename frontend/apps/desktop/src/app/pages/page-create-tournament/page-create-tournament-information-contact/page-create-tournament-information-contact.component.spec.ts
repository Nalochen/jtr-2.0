import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCreateInformationContactComponent } from './page-create-tournament-information-contact.component';

describe('PageCreateInformationContactComponent', () => {
  let component: PageCreateInformationContactComponent;
  let fixture: ComponentFixture<PageCreateInformationContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCreateInformationContactComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PageCreateInformationContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
