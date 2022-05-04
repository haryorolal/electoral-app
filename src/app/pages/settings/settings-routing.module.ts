import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';

const routes: Routes = [  
  {path: '', component: SettingsComponent, children: [
      {path:'constitutions', loadChildren: () => import('./constitutions/constitutions.module').then(x => x.ConstitutionsModule)},
      {path: 'elections', loadChildren: () => import('./election/elections.module').then(x => x.ElectionsModule)},
      {path: 'localgovernments', loadChildren: () => import('./locals/locals.module').then(x => x.LocalsModule)},
      {path: 'partys', loadChildren: () => import('./partys/partys.module').then(x => x.PartysModule)},
      {path: 'states', loadChildren: () => import('./states/states.module').then(x => x.StatesModule)},   
      {path: 'candidates', loadChildren: () => import('./candidates/candidates.module').then(x => x.CandidatesModule)} 
      //{path: 'elections', loadChildren: () => import('./form/form.module').then(x => x.FormModule)},
      //{path:'', redirectTo: 'elections', pathMatch: 'full'}
  ]}
    
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
