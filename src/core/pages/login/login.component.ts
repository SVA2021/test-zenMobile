import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {TuiAlertService} from "@taiga-ui/core";
import {Router} from "@angular/router";
import {AuthService} from "@core/services";
import {LoginBodyT} from "@core/models";
import {LocalStorageService} from "@core/services/local-storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
    bodyFromLs: LoginBodyT | null = null;

    readonly loginForm = new FormGroup({
        email: new FormControl<string | null>(null, [Validators.required, Validators.email]),
        password: new FormControl<string | null>(null, [Validators.required, Validators.minLength(8)]),
    })

    constructor(
        @Inject(TuiAlertService) private readonly alerts: TuiAlertService,
        @Inject(Router) private readonly router: Router,
        @Inject(AuthService) private readonly authService: AuthService,
        @Inject(LocalStorageService) private readonly lsService: LocalStorageService,
        ) {
    }


    ngOnInit(): void {
        this.bodyFromLs = this.lsService.getAuthFromLs();
        if (this.bodyFromLs) {
            this.onLogin(this.bodyFromLs);
        }
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

        const body: LoginBodyT = {
            email: this.loginForm.controls.email.value as string,
            password: this.loginForm.controls.password.value as string,
        }

        this.onLogin(body);
    }

    private onLogin(body: LoginBodyT): void {
        this.authService.login(body).subscribe((res) => {
            if (res) {
                this.lsService.setAuthToLs(res);
                this.alerts
                    .open('Вход выполнен!',
                        {
                            label: 'Успешно',
                            status: 'success',
                            autoClose: 3000,
                        })
                    .subscribe();
                this.router.navigate(['/home']).then();
            } else {
                this.alerts
                    .open('Пара логин/пароль неверна!',
                        {
                            label: 'Ошибка авторизации',
                            status: 'error',
                            hasCloseButton: true,
                            autoClose: 30000,
                        })
                    .subscribe();
            }
        })
    }

    private isEmptyControl(control: AbstractControl): boolean {
        return control.value === null || control.value === '' || !control.value.trim();
    }
}
