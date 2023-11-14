import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfilePageComponent} from './profile-page.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
    {path: '', component: ProfilePageComponent,},
];

@NgModule({
    declarations: [
        ProfilePageComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule
    ]
})
export class ProfilePageModule {
}
