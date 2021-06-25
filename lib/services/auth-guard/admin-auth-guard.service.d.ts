import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication/authentication.service';
/**
 * A service used to limit access to a route to administrators
 */
import * as ɵngcc0 from '@angular/core';
export declare class AdminAuthGuardService implements CanActivate {
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AdminAuthGuardService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4tYXV0aC1ndWFyZC5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImFkbWluLWF1dGgtZ3VhcmQuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbkFjdGl2YXRlLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG4vKipcbiAqIEEgc2VydmljZSB1c2VkIHRvIGxpbWl0IGFjY2VzcyB0byBhIHJvdXRlIHRvIGFkbWluaXN0cmF0b3JzXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEFkbWluQXV0aEd1YXJkU2VydmljZSBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgICBwcml2YXRlIGF1dGhlbnRpY2F0aW9uU2VydmljZTtcbiAgICBwcml2YXRlIHJvdXRlcjtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSBhdXRoZW50aWNhdGlvblNlcnZpY2UgLSBBIHJlZmVyZW5jZSB0byB0aGUgYXV0aGVudGljYXRpb24gc2VydmljZVxuICAgICAqIEBwYXJhbSByb3V0ZXIgLSBBIHJlZmVyZW5jZSB0byB0aGUgcm91dGVyXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsIHJvdXRlcjogUm91dGVyKTtcbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmUgd2hldGhlciBhIHJvdXRlIGNhbiBiZSBhY3RpdmF0ZWRcbiAgICAgKiBAcGFyYW0gcm91dGUgLSBUaGUgYWN0aXZhdGVkIHJvdXRlIHNuYXBzaG90XG4gICAgICogQHBhcmFtIHN0YXRlIC0gVGhlIHJvdXRlciBzdGF0ZSBzbmFwc2hvdFxuICAgICAqIEByZXR1cm5zIEFuIG9ic2VydmFibGUgYm9vbGVhbiBvciBhIHByb21pc2Ugb2YgYSBib29sZWFuXG4gICAgICovXG4gICAgY2FuQWN0aXZhdGUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxib29sZWFuPiB8IFByb21pc2U8Ym9vbGVhbj4gfCBib29sZWFuO1xufVxuIl19