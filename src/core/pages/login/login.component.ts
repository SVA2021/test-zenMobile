import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {TuiAlertService} from "@taiga-ui/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

    readonly loginForm = new FormGroup({
        email: new FormControl<string | null>(null, [Validators.required, Validators.email]),
        password: new FormControl<string | null>(null, [Validators.required, Validators.minLength(8)]),
    })

    constructor(
        @Inject(TuiAlertService) private readonly alerts: TuiAlertService,
        @Inject(Router) private readonly router: Router,
        ) {
    }


    ngOnInit(): void {
    }

    getError(control: AbstractControl): boolean {
        return control.touched && control.invalid;
    }

    onSave(): void {
        let isAnyRequiredFieldEmpty =
            this.isEmptyControl(this.loginForm.controls.email)
            || this.isEmptyControl(this.loginForm.controls.password);
        if (this.loginForm.invalid || isAnyRequiredFieldEmpty) {
            this.loginForm.markAllAsTouched();
            this.alerts
                .open('Проверьте правильность заполнения формы>',
                    {
                        label: 'Ошибка валидации',
                        status: 'error',
                        hasCloseButton: true,
                        autoClose: 30000,
                    })
                .subscribe();
            return;
        }
        //TODO: add login user to ls function
        this.router.navigate(['/home']).then();
    }

    private isEmptyControl(control: AbstractControl): boolean {
        return control.value === null || control.value === '' || !control.value.trim();
    }
}
