import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService  {

    constructor(private api: ApiService) { }

    // canActivateChild(
    //     childRoute: ActivatedRouteSnapshot,
    //     state: RouterStateSnapshot): boolean | <

    isLoggedIn(): boolean {
        const token = this.api.getToken();
        return (token && token.length > 0) ? true : false;
    }
}
