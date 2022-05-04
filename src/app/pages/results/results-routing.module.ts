import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultComponent } from './component/result/result.component';
import { ResultsComponent } from './results.component';

const routes: Routes = [
  {path: '', component: ResultsComponent, children: [
    {path: 'result', component: ResultComponent},
    {path: '', redirectTo: 'result', pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultsRoutingModule { }
