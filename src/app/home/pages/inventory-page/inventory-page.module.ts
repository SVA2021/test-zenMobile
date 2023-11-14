import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InventoryPageComponent} from './inventory-page.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
    {path: '', component: InventoryPageComponent,},
];

@NgModule({
    declarations: [
        InventoryPageComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule
    ]
})
export class InventoryPageModule {
}
