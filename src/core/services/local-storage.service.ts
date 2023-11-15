import { Injectable } from '@angular/core';

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
}
