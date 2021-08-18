import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGadgetsComponent } from './update-gadgets.component';

describe('UpdateGadgetsComponent', () => {
  let component: UpdateGadgetsComponent;
  let fixture: ComponentFixture<UpdateGadgetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateGadgetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateGadgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
