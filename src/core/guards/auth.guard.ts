import {inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from "@core/services";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    private readonly router = inject(Router);
    private readonly authService = inject(AuthService);

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (this.authService.isLogged) {
            return true;
        } else {
            this.router.navigate(['/login']).then();
            return false;
        }
    }

}
