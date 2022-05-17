import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards';
import { UserResolver } from './resolver';

const routes: Routes = [
    {path: 'new', loadChildren: () => import('./form/form.module').then(x => x.FormModule), canActivate: [AuthGuard]},
    {path: 'edit', loadChildren: () => import('./form/form.module').then(x => x.FormModule),
      resolve:{ user: UserResolver }, canActivate: [AuthGuard] },
    {path: ':id', loadChildren: () => import('./display/display.module').then(x => x.DisplayModule)}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
