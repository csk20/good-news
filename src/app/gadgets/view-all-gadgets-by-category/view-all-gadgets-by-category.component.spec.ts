import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllGadgetsByCategoryComponent } from './view-all-gadgets-by-category.component';

describe('ViewAllGadgetsByCategoryComponent', () => {
  let component: ViewAllGadgetsByCategoryComponent;
  let fixture: ComponentFixture<ViewAllGadgetsByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllGadgetsByCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllGadgetsByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
