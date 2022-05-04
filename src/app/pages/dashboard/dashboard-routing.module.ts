import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsComponent } from '../results/results.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, children: [   
    {path: 'demography', loadChildren: () => import('../demography/demography.module').then(x => x.DemographyModule)}, 
     {path: 'settings', loadChildren: () => import('../settings/settings.module').then(x => x.SettingsModule)},
     {path: 'profile', loadChildren: () => import('../profile/profile.module').then(x => x.ProfileModule)}, 
     {path: 'results', loadChildren: () => import('../results/results.module').then(x => x.ResultsModule)},
     {path: '', redirectTo: 'demography', pathMatch:'full'}  

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
