import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {fakeUser, UserT} from "@core/models";
import {TuiAlertService} from "@taiga-ui/core";

@Component({
    selector: 'app-profile-page',
    templateUrl: './profile-page.component.html',
    styleUrls: ['./profile-page.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePageComponent implements OnInit {
    user: UserT | null = null
    urlRegExp = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;

    readonly profileForm = new FormGroup({
        email: new FormControl<string | null>(null, [Validators.required, Validators.email]),
        firstName: new FormControl<string | null>(null, [Validators.required, Validators.maxLength(255)]),
        lastName: new FormControl<string | null>(null, [Validators.required, Validators.maxLength(255)]),
        phone: new FormControl<string | null>(null, [Validators.required, Validators.minLength(12)]),
        url: new FormControl<string | null>(null, [Validators.pattern(this.urlRegExp)]),
    })

    constructor(@Inject(TuiAlertService) private readonly alerts: TuiAlertService) {
    }


    ngOnInit(): void {
        //TODO: add get user from ls function
        this.user = fakeUser;
        this.setProfileFormValue();
    }

    getError(control: AbstractControl): boolean {
        return control.touched && control.invalid;
    }

    onSave(): void {
        let isAnyRequiredFieldEmpty =
            this.isEmptyControl(this.profileForm.controls.firstName)
            || this.isEmptyControl(this.profileForm.controls.lastName)
            || this.isEmptyControl(this.profileForm.controls.email)
            || this.isEmptyControl(this.profileForm.controls.phone);
        if (this.profileForm.invalid || isAnyRequiredFieldEmpty) {
            this.profileForm.markAllAsTouched();
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
        //TODO: add save user to ls function
    }

    private setProfileFormValue(): void {
        if (!this.user) return;
        this.profileForm.patchValue({
            email: this.user.email,
            firstName: this.user.firstName,
            lastName: this.user.lastName,
            phone: this.user.phone,
            url: this.user.url,
        });
        this.profileForm.controls.email.disable();
    }

    private isEmptyControl(control: AbstractControl): boolean {
        return control.value === null || control.value === '' || !control.value.trim();
    }
}
