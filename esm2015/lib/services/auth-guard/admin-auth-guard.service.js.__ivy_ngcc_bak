import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';
import * as i0 from "@angular/core";
import * as i1 from "../authentication/authentication.service";
import * as i2 from "@angular/router";
/**
 * A service used to limit access to a route to administrators
 */
let AdminAuthGuardService = class AdminAuthGuardService {
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
        const isAuthenticated = this.authenticationService.isAuthenticated();
        if (isAuthenticated) {
            const userRole = this.authenticationService.getPrimaryUserRole();
            if (userRole === 'admin') {
                return true;
            }
        }
        this.router.navigate(['/admin/login']);
        return false;
    }
};
AdminAuthGuardService.ctorParameters = () => [
    { type: AuthenticationService },
    { type: Router }
];
AdminAuthGuardService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AdminAuthGuardService_Factory() { return new AdminAuthGuardService(i0.ɵɵinject(i1.AuthenticationService), i0.ɵɵinject(i2.Router)); }, token: AdminAuthGuardService, providedIn: "root" });
AdminAuthGuardService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AdminAuthGuardService);
export { AdminAuthGuardService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4tYXV0aC1ndWFyZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGVhdGhlcm1hbi1ib290c3RyYXAvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYXV0aC1ndWFyZC9hZG1pbi1hdXRoLWd1YXJkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUNMLFdBQVcsRUFDWCxzQkFBc0IsRUFDdEIsbUJBQW1CLEVBQ25CLE1BQU0sRUFDUCxNQUFNLGlCQUFpQixDQUFDO0FBRXpCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDOzs7O0FBRWpGOztHQUVHO0FBSUgsSUFBYSxxQkFBcUIsR0FBbEMsTUFBYSxxQkFBcUI7SUFDaEM7Ozs7T0FJRztJQUNILFlBQ1UscUJBQTRDLEVBQzVDLE1BQWM7UUFEZCwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDckIsQ0FBQztJQUVKOzs7OztPQUtHO0lBQ0ksV0FBVyxDQUNoQixLQUE2QixFQUM3QixLQUEwQjtRQUUxQixNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDckUsSUFBSSxlQUFlLEVBQUU7WUFDbkIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDakUsSUFBSSxRQUFRLEtBQUssT0FBTyxFQUFFO2dCQUN4QixPQUFPLElBQUksQ0FBQzthQUNiO1NBQ0Y7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDdkMsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0NBQ0YsQ0FBQTs7WUF4QmtDLHFCQUFxQjtZQUNwQyxNQUFNOzs7QUFSYixxQkFBcUI7SUFIakMsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLHFCQUFxQixDQStCakM7U0EvQlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ2FuQWN0aXZhdGUsXG4gIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gIFJvdXRlclN0YXRlU25hcHNob3QsXG4gIFJvdXRlclxufSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5cbi8qKlxuICogQSBzZXJ2aWNlIHVzZWQgdG8gbGltaXQgYWNjZXNzIHRvIGEgcm91dGUgdG8gYWRtaW5pc3RyYXRvcnNcbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQWRtaW5BdXRoR3VhcmRTZXJ2aWNlIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICogQHBhcmFtIGF1dGhlbnRpY2F0aW9uU2VydmljZSAtIEEgcmVmZXJlbmNlIHRvIHRoZSBhdXRoZW50aWNhdGlvbiBzZXJ2aWNlXG4gICAqIEBwYXJhbSByb3V0ZXIgLSBBIHJlZmVyZW5jZSB0byB0aGUgcm91dGVyXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGF1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgd2hldGhlciBhIHJvdXRlIGNhbiBiZSBhY3RpdmF0ZWRcbiAgICogQHBhcmFtIHJvdXRlIC0gVGhlIGFjdGl2YXRlZCByb3V0ZSBzbmFwc2hvdFxuICAgKiBAcGFyYW0gc3RhdGUgLSBUaGUgcm91dGVyIHN0YXRlIHNuYXBzaG90XG4gICAqIEByZXR1cm5zIEFuIG9ic2VydmFibGUgYm9vbGVhbiBvciBhIHByb21pc2Ugb2YgYSBib29sZWFuXG4gICAqL1xuICBwdWJsaWMgY2FuQWN0aXZhdGUoXG4gICAgcm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3RcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuPiB8IFByb21pc2U8Ym9vbGVhbj4gfCBib29sZWFuIHtcbiAgICBjb25zdCBpc0F1dGhlbnRpY2F0ZWQgPSB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5pc0F1dGhlbnRpY2F0ZWQoKTtcbiAgICBpZiAoaXNBdXRoZW50aWNhdGVkKSB7XG4gICAgICBjb25zdCB1c2VyUm9sZSA9IHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmdldFByaW1hcnlVc2VyUm9sZSgpO1xuICAgICAgaWYgKHVzZXJSb2xlID09PSAnYWRtaW4nKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hZG1pbi9sb2dpbiddKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==