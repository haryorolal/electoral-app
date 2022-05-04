import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemographyComponent } from './demography.component';

const routes: Routes = [
  {path: '', component: DemographyComponent, children: [
    {path: 'general', loadChildren: () => import('./components/general/general.module').then(x => x.GeneralModule)},
    {path: 'gubanitarian', loadChildren: () => import('./components/gubanitarian/gubanitarian.module').then(x => x.GubanitarianModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemographyRoutingModule { }
