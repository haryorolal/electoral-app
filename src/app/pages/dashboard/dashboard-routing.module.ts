import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards';
import { DemographyComponent } from '../demography/demography.component';
import { ReportsComponent } from '../reports/reports.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, children: [   
     {path: 'demography', component: DemographyComponent, canActivate: [AuthGuard]}, 
     {path: 'vote', loadChildren: () => import('../vote/vote.module').then(x => x.VoteModule), canActivate: [AuthGuard]}, 
     {path: 'settings', loadChildren: () => import('../settings/settings.module').then(x => x.SettingsModule), canActivate: [AuthGuard]},
     {path: 'profile', loadChildren: () => import('../profile/profile.module').then(x => x.ProfileModule), canActivate: [AuthGuard]}, 
     {path: 'reports', component: ReportsComponent, canActivate: [AuthGuard]},
     {path: 'results', loadChildren: () => import('../results/results.module').then(x => x.ResultsModule), canActivate: [AuthGuard]},
     {path: '', redirectTo: 'demography', pathMatch:'full'}  
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
