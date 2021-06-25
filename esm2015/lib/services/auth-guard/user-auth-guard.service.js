import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';
import * as i0 from "@angular/core";
import * as i1 from "../authentication/authentication.service";
import * as i2 from "@angular/router";
/**
 * A service used to limit access to a route to registered users
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/router';
let UserAuthGuardService = class UserAuthGuardService {
    /**
     * Constructor
     * @param authenticationService - A reference to the authentication service
     * @param router - A reference to the router
     */
    constructor(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    /**
     * Determine whether a route can be activated
     * @param route - The activated route snapshot
     * @param state - The router state snapshot
     * @returns An observable boolean or a promise of a boolean
     */
    canActivate(route, state) {
        if (this.authenticationService.isAuthenticated()) {
            return true;
        }
        this.router.navigate(['/']);
        return false;
    }
};
UserAuthGuardService.ɵfac = function UserAuthGuardService_Factory(t) { return new (t || UserAuthGuardService)(ɵngcc0.ɵɵinject(AuthenticationService), ɵngcc0.ɵɵinject(ɵngcc1.Router)); };
UserAuthGuardService.ctorParameters = () => [
    { type: AuthenticationService },
    { type: Router }
];
UserAuthGuardService.ɵprov = i0.ɵɵdefineInjectable({ factory: function UserAuthGuardService_Factory() { return new UserAuthGuardService(i0.ɵɵinject(i1.AuthenticationService), i0.ɵɵinject(i2.Router)); }, token: UserAuthGuardService, providedIn: "root" });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(UserAuthGuardService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: AuthenticationService }, { type: ɵngcc1.Router }]; }, null); })();
export { UserAuthGuardService };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hdXRoLWd1YXJkLnNlcnZpY2UuanMiLCJzb3VyY2VzIjpbIm5nOi9sZWF0aGVybWFuLWJvb3RzdHJhcC9saWIvc2VydmljZXMvYXV0aC1ndWFyZC91c2VyLWF1dGgtZ3VhcmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsV0FBVyxFQUNYLHNCQUFzQixFQUN0QixtQkFBbUIsRUFDbkIsTUFBTSxFQUNQLE1BQU0saUJBQWlCLENBQUM7QUFFekIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDakY7QUFFZ0M7QUFHbkI7QUFKYjtBQUNBO0FBQ0EsR0FBRzs7O0FBSUgsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7QUFBRyxJQUNsQztBQUNGO0FBQ0U7QUFDRTtBQUVKLE9BREs7QUFDTCxJQUFFLFlBQ1UscUJBQTRDLEVBQzVDLE1BQWM7QUFDdkIsUUFGUywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO0FBQUMsUUFDN0MsV0FBTSxHQUFOLE1BQU0sQ0FBUTtBQUMxQixJQUFLLENBQUM7QUFDTixJQUNFO0FBQ0Y7QUFDRTtBQUNFO0FBQ0U7QUFFSixPQURHO0FBQ0wsSUFBUyxXQUFXLENBQ2hCLEtBQTZCLEVBQzdCLEtBQTBCO0FBQzNCLFFBQ0MsSUFBSSxJQUFJLENBQUMscUJBQXFCLENBQUMsZUFBZSxFQUFFLEVBQUU7QUFDdEQsWUFBTSxPQUFPLElBQUksQ0FBQztBQUNsQixTQUFLO0FBQ0wsUUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDaEMsUUFBSSxPQUFPLEtBQUssQ0FBQztBQUNqQixJQUFFLENBQUM7QUFDSCxDQUFDO3lMQUFBO0FBQ0Q7QUFBOEMsWUFyQlgscUJBQXFCO0FBQ3RELFlBQWtCLE1BQU07QUFDeEI7QUFBRztBQVRRLG9CQUFvQixvQkFIaEMsVUFBVSxDQUFDLFVBQ1YsVUFBVSxFQUFFO0FBQU0sTUFDbkIsQ0FBQyxJQUNXO0tBQW9CLENBMkJoQzs7O3dHQUNEO0FBQUMsU0E1Qlksb0JBQW9CO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDYW5BY3RpdmF0ZSxcbiAgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgUm91dGVyU3RhdGVTbmFwc2hvdCxcbiAgUm91dGVyXG59IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcblxuLyoqXG4gKiBBIHNlcnZpY2UgdXNlZCB0byBsaW1pdCBhY2Nlc3MgdG8gYSByb3V0ZSB0byByZWdpc3RlcmVkIHVzZXJzXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJBdXRoR3VhcmRTZXJ2aWNlIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICogQHBhcmFtIGF1dGhlbnRpY2F0aW9uU2VydmljZSAtIEEgcmVmZXJlbmNlIHRvIHRoZSBhdXRoZW50aWNhdGlvbiBzZXJ2aWNlXG4gICAqIEBwYXJhbSByb3V0ZXIgLSBBIHJlZmVyZW5jZSB0byB0aGUgcm91dGVyXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGF1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgd2hldGhlciBhIHJvdXRlIGNhbiBiZSBhY3RpdmF0ZWRcbiAgICogQHBhcmFtIHJvdXRlIC0gVGhlIGFjdGl2YXRlZCByb3V0ZSBzbmFwc2hvdFxuICAgKiBAcGFyYW0gc3RhdGUgLSBUaGUgcm91dGVyIHN0YXRlIHNuYXBzaG90XG4gICAqIEByZXR1cm5zIEFuIG9ic2VydmFibGUgYm9vbGVhbiBvciBhIHByb21pc2Ugb2YgYSBib29sZWFuXG4gICAqL1xuICBwdWJsaWMgY2FuQWN0aXZhdGUoXG4gICAgcm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3RcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuPiB8IFByb21pc2U8Ym9vbGVhbj4gfCBib29sZWFuIHtcbiAgICBpZiAodGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuaXNBdXRoZW50aWNhdGVkKCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nXSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0=