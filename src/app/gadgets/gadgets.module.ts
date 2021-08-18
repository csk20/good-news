import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GadgetsRoutingModule } from './gadgets-routing.module';
import { GadgetsComponent } from './gadgets.component';
import { CreateGadgetsComponent } from './create-gadgets/create-gadgets.component';
import { ViewGadgetsComponent } from './view-gadgets/view-gadgets.component';
import { UpdateGadgetsComponent } from './update-gadgets/update-gadgets.component';
import { DeleteGadgetsComponent } from './delete-gadgets/delete-gadgets.component';
import { ViewAllGadgetsComponent } from './view-all-gadgets/view-all-gadgets.component';
import { ViewAllGadgetsByCategoryComponent } from './view-all-gadgets-by-category/view-all-gadgets-by-category.component';
import { ViewAllGadgetsByDateComponent } from './view-all-gadgets-by-date/view-all-gadgets-by-date.component';


@NgModule({
  declarations: [
    GadgetsComponent,
    CreateGadgetsComponent,
    ViewGadgetsComponent,
    UpdateGadgetsComponent,
    DeleteGadgetsComponent,
    ViewAllGadgetsComponent,
    ViewAllGadgetsByCategoryComponent,
    ViewAllGadgetsByDateComponent
  ],
  imports: [
    CommonModule,
    GadgetsRoutingModule
  ]
})
export class GadgetsModule { }
