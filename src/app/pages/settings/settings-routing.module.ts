import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, RoleGuard, Roles } from 'src/app/guards';
import { SettingsComponent } from './settings.component';

const routes: Routes = [  
  {path: '', component: SettingsComponent, children: [
      {path:'constitutions', loadChildren: () => import('./constitutions/constitutions.module').then(x => x.ConstitutionsModule), canLoad: [AuthGuard, RoleGuard], data: {roles: [Roles.SuperAdmin]} },
      {path: 'elections', loadChildren: () => import('./election/elections.module').then(x => x.ElectionsModule), canLoad: [AuthGuard, RoleGuard], data: {roles: [Roles.SuperAdmin, Roles.admin]} },
      {path: 'localgovernments', loadChildren: () => import('./locals/locals.module').then(x => x.LocalsModule), canLoad: [AuthGuard, RoleGuard], data: {roles: [Roles.SuperAdmin, Roles.admin]} },
      {path: 'partys', loadChildren: () => import('./partys/partys.module').then(x => x.PartysModule), canLoad: [AuthGuard, RoleGuard], data: {roles: [Roles.SuperAdmin, Roles.admin]} },
      {path: 'states', loadChildren: () => import('./states/states.module').then(x => x.StatesModule), canLoad: [AuthGuard, RoleGuard], data: {roles: [Roles.SuperAdmin, Roles.admin]} },   
      {path: 'positions', loadChildren: () => import('./positions/positions.module').then(x => x.PositionsModule), canLoad: [AuthGuard, RoleGuard], data: {roles: [Roles.SuperAdmin, Roles.admin]} },
      {path: 'candidates', loadChildren: () => import('./candidates/candidates.module').then(x => x.CandidatesModule), canLoad: [AuthGuard, RoleGuard], data: {roles: [Roles.SuperAdmin, Roles.admin]} },
      {path: 'votetable', loadChildren: () => import('./votetables/votetables.module').then(x => x.VotetablesModule), canLoad: [AuthGuard, RoleGuard], data: {roles: [Roles.SuperAdmin]} },
      {path:'', redirectTo: 'constitutions', pathMatch: 'full'}
  ]}
    
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
