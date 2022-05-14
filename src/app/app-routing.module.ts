import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards';

const routes: Routes = [
  {path:'', children: [
    {path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(x => x.AuthModule)},
    {path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(x => x.DashboardModule),
      canActivate: [AuthGuard]
    }, 
    //{path: 'profile', loadChildren: () => import('./pages/profile/profile.module').then(x => x.ProfileModule)},
    {path: 'static', loadChildren: () => import('./pages/static/static.module').then(x => x.StaticModule)},
    {path: '', pathMatch: 'full', redirectTo: 'static/welcome'},

  ]},
  {path: '**', pathMatch: 'full', redirectTo: '/static/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
