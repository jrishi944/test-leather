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
var AdminAuthGuardService = /** @class */ (function () {
    /**
     * Constructor
     * @param authenticationService - A reference to the authentication service
     * @param router - A reference to the router
     */
    function AdminAuthGuardService(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    /**
     * Determine whether a route can be activated
     * @param route - The activated route snapshot
     * @param state - The router state snapshot
     * @returns An observable boolean or a promise of a boolean
     */
    AdminAuthGuardService.prototype.canActivate = function (route, state) {
        var isAuthenticated = this.authenticationService.isAuthenticated();
        if (isAuthenticated) {
            var userRole = this.authenticationService.getPrimaryUserRole();
            if (userRole === 'admin') {
                return true;
            }
        }
        this.router.navigate(['/admin/login']);
        return false;
    };
    AdminAuthGuardService.ctorParameters = function () { return [
        { type: AuthenticationService },
        { type: Router }
    ]; };
    AdminAuthGuardService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AdminAuthGuardService_Factory() { return new AdminAuthGuardService(i0.ɵɵinject(i1.AuthenticationService), i0.ɵɵinject(i2.Router)); }, token: AdminAuthGuardService, providedIn: "root" });
    AdminAuthGuardService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], AdminAuthGuardService);
    return AdminAuthGuardService;
}());
export { AdminAuthGuardService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4tYXV0aC1ndWFyZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGVhdGhlcm1hbi1ib290c3RyYXAvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYXV0aC1ndWFyZC9hZG1pbi1hdXRoLWd1YXJkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUNMLFdBQVcsRUFDWCxzQkFBc0IsRUFDdEIsbUJBQW1CLEVBQ25CLE1BQU0sRUFDUCxNQUFNLGlCQUFpQixDQUFDO0FBRXpCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDOzs7O0FBRWpGOztHQUVHO0FBSUg7SUFDRTs7OztPQUlHO0lBQ0gsK0JBQ1UscUJBQTRDLEVBQzVDLE1BQWM7UUFEZCwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDckIsQ0FBQztJQUVKOzs7OztPQUtHO0lBQ0ksMkNBQVcsR0FBbEIsVUFDRSxLQUE2QixFQUM3QixLQUEwQjtRQUUxQixJQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDckUsSUFBSSxlQUFlLEVBQUU7WUFDbkIsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDakUsSUFBSSxRQUFRLEtBQUssT0FBTyxFQUFFO2dCQUN4QixPQUFPLElBQUksQ0FBQzthQUNiO1NBQ0Y7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDdkMsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOztnQkF2QmdDLHFCQUFxQjtnQkFDcEMsTUFBTTs7O0lBUmIscUJBQXFCO1FBSGpDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxxQkFBcUIsQ0ErQmpDO2dDQS9DRDtDQStDQyxBQS9CRCxJQStCQztTQS9CWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDYW5BY3RpdmF0ZSxcbiAgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgUm91dGVyU3RhdGVTbmFwc2hvdCxcbiAgUm91dGVyXG59IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcblxuLyoqXG4gKiBBIHNlcnZpY2UgdXNlZCB0byBsaW1pdCBhY2Nlc3MgdG8gYSByb3V0ZSB0byBhZG1pbmlzdHJhdG9yc1xuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBZG1pbkF1dGhHdWFyZFNlcnZpY2UgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0gYXV0aGVudGljYXRpb25TZXJ2aWNlIC0gQSByZWZlcmVuY2UgdG8gdGhlIGF1dGhlbnRpY2F0aW9uIHNlcnZpY2VcbiAgICogQHBhcmFtIHJvdXRlciAtIEEgcmVmZXJlbmNlIHRvIHRoZSByb3V0ZXJcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuICApIHt9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSB3aGV0aGVyIGEgcm91dGUgY2FuIGJlIGFjdGl2YXRlZFxuICAgKiBAcGFyYW0gcm91dGUgLSBUaGUgYWN0aXZhdGVkIHJvdXRlIHNuYXBzaG90XG4gICAqIEBwYXJhbSBzdGF0ZSAtIFRoZSByb3V0ZXIgc3RhdGUgc25hcHNob3RcbiAgICogQHJldHVybnMgQW4gb2JzZXJ2YWJsZSBib29sZWFuIG9yIGEgcHJvbWlzZSBvZiBhIGJvb2xlYW5cbiAgICovXG4gIHB1YmxpYyBjYW5BY3RpdmF0ZShcbiAgICByb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdFxuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHwgUHJvbWlzZTxib29sZWFuPiB8IGJvb2xlYW4ge1xuICAgIGNvbnN0IGlzQXV0aGVudGljYXRlZCA9IHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmlzQXV0aGVudGljYXRlZCgpO1xuICAgIGlmIChpc0F1dGhlbnRpY2F0ZWQpIHtcbiAgICAgIGNvbnN0IHVzZXJSb2xlID0gdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuZ2V0UHJpbWFyeVVzZXJSb2xlKCk7XG4gICAgICBpZiAodXNlclJvbGUgPT09ICdhZG1pbicpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FkbWluL2xvZ2luJ10pO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19