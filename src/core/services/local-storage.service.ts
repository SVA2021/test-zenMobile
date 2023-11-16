import {Injectable} from '@angular/core';
import {LoginBodyT, UserT} from "@core/models";

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {
    authKey = 'auth';
    userKey = 'user';

    getItemFromLocalStorage<T>(key: string) {
        let stringValue = window.localStorage.getItem(key) ?? null;
        return stringValue ? JSON.parse(stringValue) as T : null;
    }

    setItemToLocalStorage(key: string, value: any) {
        window.localStorage.setItem(key, JSON.stringify(value));
    }

    public getAuthFromLs(): LoginBodyT | null {
        return this.getItemFromLocalStorage(this.authKey);
    }

    public setAuthToLs(auth: LoginBodyT) {
        this.setItemToLocalStorage(this.authKey, auth);
    }

    public getUserFromLs(): UserT | null {
        return this.getItemFromLocalStorage(this.userKey);
    }

    public setUserToLs(user: UserT) {
        this.setItemToLocalStorage(this.userKey, user);
    }
}
