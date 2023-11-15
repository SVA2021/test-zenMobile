import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfilePageComponent} from './profile-page.component';
import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {TuiInputModule, TuiInputPhoneModule} from "@taiga-ui/kit";
import {TuiButtonModule, TuiLabelModule, TuiTextfieldControllerModule} from "@taiga-ui/core";

const routes: Routes = [
    {path: '', component: ProfilePageComponent,},
];

@NgModule({
    declarations: [
        ProfilePageComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        ReactiveFormsModule,
        TuiInputModule,
        TuiTextfieldControllerModule,
        TuiLabelModule,
        TuiInputPhoneModule,
        TuiButtonModule
    ]
})
export class ProfilePageModule {
}
