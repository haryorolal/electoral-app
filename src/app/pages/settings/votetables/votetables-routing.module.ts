import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VotetablesComponent } from './votetables.component';

const routes: Routes = [
  {path: '', component: VotetablesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VotetablesRoutingModule { }
