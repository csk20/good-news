import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGadgetsComponent } from './delete-gadgets.component';

describe('DeleteGadgetsComponent', () => {
  let component: DeleteGadgetsComponent;
  let fixture: ComponentFixture<DeleteGadgetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteGadgetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteGadgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
