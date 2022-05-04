import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConstitutionsComponent } from './constitutions.component';

const routes: Routes = [
  {path: '', component: ConstitutionsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConstitutionsRoutingModule { }
