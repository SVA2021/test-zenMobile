import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "@core/pages/login/login.component";
import {AuthGuard} from "@core/guards/auth.guard";

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: '', loadChildren: () => import('app/home/home.module').then(m => m.HomeModule), canActivate: [AuthGuard]},
    {path: '**', redirectTo: 'login'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
