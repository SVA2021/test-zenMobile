import {Injectable} from '@angular/core'
import {BehaviorSubject, of} from "rxjs";
import {LoginBodyT} from "@core/models";

@Injectable({providedIn: 'root'})
export class AuthService {
    public isAuth$ = new BehaviorSubject<boolean>(false);

    public login(body: LoginBodyT) {
        const isFakeAuthOk = Math.random() > 0.1;
        this.isAuth$.next(isFakeAuthOk);
        return of(isFakeAuthOk ? body : null);
    }

    public logout() {
        this.isAuth$.next(false);
    }
}
