import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProfileService } from './services';
import { HeaderComponent } from './components/header/header.component'
import {RouterLinkWithHref} from "@angular/router";
import {TuiLinkModule} from "@taiga-ui/core";
import {TuiBadgeModule} from "@taiga-ui/kit";

@NgModule({
    imports: [
        CommonModule,
        RouterLinkWithHref,
        TuiLinkModule,
        TuiBadgeModule
    ],
    providers: [
        ProfileService
    ],
    exports: [
        HeaderComponent
    ],
    declarations: [
        HeaderComponent
    ]
})
export class SharedModule { }
