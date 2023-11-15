import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AuthService } from './services';
import { LoginComponent } from './pages/login/login.component'
import {ReactiveFormsModule} from "@angular/forms";
import {TuiButtonModule, TuiLabelModule, TuiTextfieldControllerModule} from "@taiga-ui/core";
import {TuiInputDateRangeModule, TuiInputModule, TuiInputPasswordModule, TuiInputPhoneModule} from "@taiga-ui/kit";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TuiButtonModule,
        TuiInputDateRangeModule,
        TuiInputModule,
        TuiInputPhoneModule,
        TuiLabelModule,
        TuiTextfieldControllerModule,
        TuiInputPasswordModule
    ],
    providers: [
        AuthService,
    ],
    declarations: [
      LoginComponent
    ]
})
export class CoreModule { }
