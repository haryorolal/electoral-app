import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemographyComponent } from '../demography/demography.component';
import { ReportsComponent } from '../reports/reports.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, children: [   
     {path: 'demography', component: DemographyComponent}, 
     {path: 'vote', loadChildren: () => import('../vote/vote.module').then(x => x.VoteModule)}, 
     {path: 'settings', loadChildren: () => import('../settings/settings.module').then(x => x.SettingsModule)},
     {path: 'profile', loadChildren: () => import('../profile/profile.module').then(x => x.ProfileModule)}, 
     {path: 'reports', component: ReportsComponent},
     {path: 'results', loadChildren: () => import('../results/results.module').then(x => x.ResultsModule)},
     {path: '', redirectTo: 'demography', pathMatch:'full'}  
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
