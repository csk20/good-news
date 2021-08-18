import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllGadgetsByDateComponent } from './view-all-gadgets-by-date.component';

describe('ViewAllGadgetsByDateComponent', () => {
  let component: ViewAllGadgetsByDateComponent;
  let fixture: ComponentFixture<ViewAllGadgetsByDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllGadgetsByDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllGadgetsByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
