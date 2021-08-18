import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateGadgetsComponent } from './create-gadgets/create-gadgets.component';
import { DeleteGadgetsComponent } from './delete-gadgets/delete-gadgets.component';
import { GadgetsComponent } from './gadgets.component';
import { UpdateGadgetsComponent } from './update-gadgets/update-gadgets.component';
import { ViewAllGadgetsByCategoryComponent } from './view-all-gadgets-by-category/view-all-gadgets-by-category.component';
import { ViewAllGadgetsByDateComponent } from './view-all-gadgets-by-date/view-all-gadgets-by-date.component';
import { ViewAllGadgetsComponent } from './view-all-gadgets/view-all-gadgets.component';
import { ViewGadgetsComponent } from './view-gadgets/view-gadgets.component';

const routes: Routes = [
  { path: '', component: GadgetsComponent },
 { path: 'gadgets', component: GadgetsComponent },
  { path: 'create-gadgets', component: CreateGadgetsComponent },
  { path: 'view-gadgets', component: ViewGadgetsComponent },
 { path: 'view-all-gadgets', component: ViewAllGadgetsComponent },
 { path: 'view-all-gadgets-by-category', component: ViewAllGadgetsByCategoryComponent },
 { path: 'view-all-gadgets-by-date', component: ViewAllGadgetsByDateComponent },
 { path: 'delete-gadgets', component: DeleteGadgetsComponent },
 { path: 'update-gadgets', component: UpdateGadgetsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GadgetsRoutingModule { }
