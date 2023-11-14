import {CommonModule} from '@angular/common'
import {HttpClientModule} from '@angular/common/http'
import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {SharedModule} from 'shared'
import {HomeMenuComponent} from './components/home-menu/home-menu.component';
import {TuiTabsModule} from "@taiga-ui/kit";
import {TuiSvgModule} from "@taiga-ui/core";
import {HomeWrapperComponent} from './components/home-wrapper/home-wrapper.component';

const routes: Routes = [
    {
        path: '',
        component: HomeWrapperComponent,
        children: [
            {
                path: 'home',
                loadChildren: () => import('app/home/pages/home-page/home-page.module').then(m => m.HomePageModule)
            },
            {
                path: 'inventory',
                loadChildren: () => import('app/home/pages/inventory-page/inventory-page.module').then(m => m.InventoryPageModule)
            },
            {
                path: 'reports',
                loadChildren: () => import('app/home/pages/reports-page/reports-page.module').then(m => m.ReportsPageModule)
            },
            {
                path: 'billing',
                loadChildren: () => import('app/home/pages/billing-page/billing-page.module').then(m => m.BillingPageModule)
            },
            {
                path: 'profile',
                loadChildren: () => import('app/home/pages/profile-page/profile-page.module').then(m => m.ProfilePageModule)
            },
            {path: '**', redirectTo: 'home', pathMatch: 'full'}
        ]
    },
    {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
    imports: [
        HttpClientModule,
        SharedModule,
        RouterModule.forChild(routes),
        CommonModule,
        TuiTabsModule,
        TuiSvgModule
    ],
    declarations: [
        HomeMenuComponent,
        HomeWrapperComponent
    ]
})
export class HomeModule {
}
