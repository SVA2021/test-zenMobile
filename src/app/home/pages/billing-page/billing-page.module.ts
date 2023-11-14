import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BillingPageComponent} from './billing-page.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
    {path: '', component: BillingPageComponent,},
];

@NgModule({
    declarations: [
        BillingPageComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule
    ]
})
export class BillingPageModule {
}
