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
UserAuthGuardService.ctorParameters = () => [
    { type: AuthenticationService },
    { type: Router }
];
UserAuthGuardService.ɵprov = i0.ɵɵdefineInjectable({ factory: function UserAuthGuardService_Factory() { return new UserAuthGuardService(i0.ɵɵinject(i1.AuthenticationService), i0.ɵɵinject(i2.Router)); }, token: UserAuthGuardService, providedIn: "root" });
UserAuthGuardService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UserAuthGuardService);
export { UserAuthGuardService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hdXRoLWd1YXJkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sZWF0aGVybWFuLWJvb3RzdHJhcC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hdXRoLWd1YXJkL3VzZXItYXV0aC1ndWFyZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFDTCxXQUFXLEVBQ1gsc0JBQXNCLEVBQ3RCLG1CQUFtQixFQUNuQixNQUFNLEVBQ1AsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQzs7OztBQUVqRjs7R0FFRztBQUlILElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQW9CO0lBQy9COzs7O09BSUc7SUFDSCxZQUNVLHFCQUE0QyxFQUM1QyxNQUFjO1FBRGQsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM1QyxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQ3JCLENBQUM7SUFFSjs7Ozs7T0FLRztJQUNJLFdBQVcsQ0FDaEIsS0FBNkIsRUFDN0IsS0FBMEI7UUFFMUIsSUFBSSxJQUFJLENBQUMscUJBQXFCLENBQUMsZUFBZSxFQUFFLEVBQUU7WUFDaEQsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM1QixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Q0FDRixDQUFBOztZQXBCa0MscUJBQXFCO1lBQ3BDLE1BQU07OztBQVJiLG9CQUFvQjtJQUhoQyxVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csb0JBQW9CLENBMkJoQztTQTNCWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDYW5BY3RpdmF0ZSxcbiAgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgUm91dGVyU3RhdGVTbmFwc2hvdCxcbiAgUm91dGVyXG59IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcblxuLyoqXG4gKiBBIHNlcnZpY2UgdXNlZCB0byBsaW1pdCBhY2Nlc3MgdG8gYSByb3V0ZSB0byByZWdpc3RlcmVkIHVzZXJzXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJBdXRoR3VhcmRTZXJ2aWNlIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICogQHBhcmFtIGF1dGhlbnRpY2F0aW9uU2VydmljZSAtIEEgcmVmZXJlbmNlIHRvIHRoZSBhdXRoZW50aWNhdGlvbiBzZXJ2aWNlXG4gICAqIEBwYXJhbSByb3V0ZXIgLSBBIHJlZmVyZW5jZSB0byB0aGUgcm91dGVyXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGF1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgd2hldGhlciBhIHJvdXRlIGNhbiBiZSBhY3RpdmF0ZWRcbiAgICogQHBhcmFtIHJvdXRlIC0gVGhlIGFjdGl2YXRlZCByb3V0ZSBzbmFwc2hvdFxuICAgKiBAcGFyYW0gc3RhdGUgLSBUaGUgcm91dGVyIHN0YXRlIHNuYXBzaG90XG4gICAqIEByZXR1cm5zIEFuIG9ic2VydmFibGUgYm9vbGVhbiBvciBhIHByb21pc2Ugb2YgYSBib29sZWFuXG4gICAqL1xuICBwdWJsaWMgY2FuQWN0aXZhdGUoXG4gICAgcm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3RcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuPiB8IFByb21pc2U8Ym9vbGVhbj4gfCBib29sZWFuIHtcbiAgICBpZiAodGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuaXNBdXRoZW50aWNhdGVkKCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nXSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0=