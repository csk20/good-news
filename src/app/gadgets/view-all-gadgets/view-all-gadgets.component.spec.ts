import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllGadgetsComponent } from './view-all-gadgets.component';

describe('ViewAllGadgetsComponent', () => {
  let component: ViewAllGadgetsComponent;
  let fixture: ComponentFixture<ViewAllGadgetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllGadgetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllGadgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
