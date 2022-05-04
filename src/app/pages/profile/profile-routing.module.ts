import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserResolver } from './resolver';

const routes: Routes = [
    {path: 'new', loadChildren: () => import('./form/form.module').then(x => x.FormModule)},
    {path: 'edit', loadChildren: () => import('./form/form.module').then(x => x.FormModule),
      resolve:{ user: UserResolver }
    },
    {path: ':id', loadChildren: () => import('./display/display.module').then(x => x.DisplayModule)}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
