import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoteComponent } from './vote.component';

const routes: Routes = [
  {path: '', component: VoteComponent, children: [
    {path: 'general', loadChildren: () => import('../vote/components/general/general.module').then(x => x.GeneralModule)},
    //{path: 'gubanitarian', loadChildren: () => import('./components/gubanitarian/gubanitarian.module').then(x => x.GubanitarianModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoteRoutingModule { }
