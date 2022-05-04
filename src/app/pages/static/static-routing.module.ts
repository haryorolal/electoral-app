import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "welcome", loadChildren: () => import('./welcome/welcome.module').then(x => x.WelcomeModule) },
  {path: "404", loadChildren: () => import('./not-found/not-found.module').then(x => x.NotFoundModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticRoutingModule { }
