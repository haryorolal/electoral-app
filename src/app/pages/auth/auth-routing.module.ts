import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const route: Routes = [
    {path: 'login', loadChildren: () => import('./component/login/login.module').then(x => x.LoginModule)},
    {path: 'registration', loadChildren: () => import('./component/registration/registration.module').then(x => x.RegistrationModule)},
    {path: 'email-confirm', loadChildren: () => import('./component/email-confirm/email-confirm.module').then(x => x.EmailConfirmModule)},
    {path: '**', pathMatch: 'full', redirectTo: 'login'}
];

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})

export class AuthRoutingModule {}