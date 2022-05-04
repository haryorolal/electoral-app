import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GubanitarianComponent } from './gubanitarian.component';

const routes: Routes = [
  {path: '', component: GubanitarianComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GubanitarianRoutingModule { }
