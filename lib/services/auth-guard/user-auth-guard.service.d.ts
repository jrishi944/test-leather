import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication/authentication.service';
/**
 * A service used to limit access to a route to registered users
 */
import * as ɵngcc0 from '@angular/core';
export declare class UserAuthGuardService implements CanActivate {
    private authenticationService;
    private router;
    /**
     * Constructor
     * @param authenticationService - A reference to the authentication service
     * @param router - A reference to the router
     */
    constructor(authenticationService: AuthenticationService, router: Router);
    /**
     * Determine whether a route can be activated
     * @param route - The activated route snapshot
     * @param state - The router state snapshot
     * @returns An observable boolean or a promise of a boolean
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserAuthGuardService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hdXRoLWd1YXJkLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsidXNlci1hdXRoLWd1YXJkLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW5BY3RpdmF0ZSwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyU3RhdGVTbmFwc2hvdCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuLyoqXG4gKiBBIHNlcnZpY2UgdXNlZCB0byBsaW1pdCBhY2Nlc3MgdG8gYSByb3V0ZSB0byByZWdpc3RlcmVkIHVzZXJzXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFVzZXJBdXRoR3VhcmRTZXJ2aWNlIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICAgIHByaXZhdGUgYXV0aGVudGljYXRpb25TZXJ2aWNlO1xuICAgIHByaXZhdGUgcm91dGVyO1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIGF1dGhlbnRpY2F0aW9uU2VydmljZSAtIEEgcmVmZXJlbmNlIHRvIHRoZSBhdXRoZW50aWNhdGlvbiBzZXJ2aWNlXG4gICAgICogQHBhcmFtIHJvdXRlciAtIEEgcmVmZXJlbmNlIHRvIHRoZSByb3V0ZXJcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihhdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSwgcm91dGVyOiBSb3V0ZXIpO1xuICAgIC8qKlxuICAgICAqIERldGVybWluZSB3aGV0aGVyIGEgcm91dGUgY2FuIGJlIGFjdGl2YXRlZFxuICAgICAqIEBwYXJhbSByb3V0ZSAtIFRoZSBhY3RpdmF0ZWQgcm91dGUgc25hcHNob3RcbiAgICAgKiBAcGFyYW0gc3RhdGUgLSBUaGUgcm91dGVyIHN0YXRlIHNuYXBzaG90XG4gICAgICogQHJldHVybnMgQW4gb2JzZXJ2YWJsZSBib29sZWFuIG9yIGEgcHJvbWlzZSBvZiBhIGJvb2xlYW5cbiAgICAgKi9cbiAgICBjYW5BY3RpdmF0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHwgUHJvbWlzZTxib29sZWFuPiB8IGJvb2xlYW47XG59XG4iXX0=