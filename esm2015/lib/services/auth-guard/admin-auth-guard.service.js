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
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/router';
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
AdminAuthGuardService.ɵfac = function AdminAuthGuardService_Factory(t) { return new (t || AdminAuthGuardService)(ɵngcc0.ɵɵinject(AuthenticationService), ɵngcc0.ɵɵinject(ɵngcc1.Router)); };
AdminAuthGuardService.ctorParameters = () => [
    { type: AuthenticationService },
    { type: Router }
];
AdminAuthGuardService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AdminAuthGuardService_Factory() { return new AdminAuthGuardService(i0.ɵɵinject(i1.AuthenticationService), i0.ɵɵinject(i2.Router)); }, token: AdminAuthGuardService, providedIn: "root" });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AdminAuthGuardService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: AuthenticationService }, { type: ɵngcc1.Router }]; }, null); })();
export { AdminAuthGuardService };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4tYXV0aC1ndWFyZC5zZXJ2aWNlLmpzIiwic291cmNlcyI6WyJuZzovbGVhdGhlcm1hbi1ib290c3RyYXAvbGliL3NlcnZpY2VzL2F1dGgtZ3VhcmQvYWRtaW4tYXV0aC1ndWFyZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFDTCxXQUFXLEVBQ1gsc0JBQXNCLEVBQ3RCLG1CQUFtQixFQUNuQixNQUFNLEVBQ1AsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNqRjtBQUVnQztBQUdqQjtBQUpmO0FBQ0E7QUFDQSxHQUFHOzs7QUFJSCxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFxQjtBQUFHLElBQ25DO0FBQ0Y7QUFDRTtBQUNFO0FBRUosT0FESztBQUNMLElBQUUsWUFDVSxxQkFBNEMsRUFDNUMsTUFBYztBQUN2QixRQUZTLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7QUFBQyxRQUM3QyxXQUFNLEdBQU4sTUFBTSxDQUFRO0FBQzFCLElBQUssQ0FBQztBQUNOLElBQ0U7QUFDRjtBQUNFO0FBQ0U7QUFDRTtBQUVKLE9BREc7QUFDTCxJQUFTLFdBQVcsQ0FDaEIsS0FBNkIsRUFDN0IsS0FBMEI7QUFDM0IsUUFDQyxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsZUFBZSxFQUFFLENBQUM7QUFDekUsUUFBSSxJQUFJLGVBQWUsRUFBRTtBQUN6QixZQUFNLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0FBQ3ZFLFlBQU0sSUFBSSxRQUFRLEtBQUssT0FBTyxFQUFFO0FBQ2hDLGdCQUFRLE9BQU8sSUFBSSxDQUFDO0FBQ3BCLGFBQU87QUFDUCxTQUFLO0FBQ0wsUUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7QUFDM0MsUUFBSSxPQUFPLEtBQUssQ0FBQztBQUNqQixJQUFFLENBQUM7QUFDSCxDQUFDOzRMQUFBO0FBQ0Q7QUFBK0MsWUF6QloscUJBQXFCO0FBQ3RELFlBQWtCLE1BQU07QUFDeEI7QUFBRztBQVRRLHFCQUFxQixvQkFIakMsVUFBVSxDQUFDLFVBQ1YsVUFBVSxFQUFFO0FBQU0sTUFDbkIsQ0FBQyxJQUNXO01BQXFCLENBK0JqQzs7O3dHQUNEO0FBQUMsU0FoQ1kscUJBQXFCO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDYW5BY3RpdmF0ZSxcbiAgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgUm91dGVyU3RhdGVTbmFwc2hvdCxcbiAgUm91dGVyXG59IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcblxuLyoqXG4gKiBBIHNlcnZpY2UgdXNlZCB0byBsaW1pdCBhY2Nlc3MgdG8gYSByb3V0ZSB0byBhZG1pbmlzdHJhdG9yc1xuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBZG1pbkF1dGhHdWFyZFNlcnZpY2UgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0gYXV0aGVudGljYXRpb25TZXJ2aWNlIC0gQSByZWZlcmVuY2UgdG8gdGhlIGF1dGhlbnRpY2F0aW9uIHNlcnZpY2VcbiAgICogQHBhcmFtIHJvdXRlciAtIEEgcmVmZXJlbmNlIHRvIHRoZSByb3V0ZXJcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuICApIHt9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSB3aGV0aGVyIGEgcm91dGUgY2FuIGJlIGFjdGl2YXRlZFxuICAgKiBAcGFyYW0gcm91dGUgLSBUaGUgYWN0aXZhdGVkIHJvdXRlIHNuYXBzaG90XG4gICAqIEBwYXJhbSBzdGF0ZSAtIFRoZSByb3V0ZXIgc3RhdGUgc25hcHNob3RcbiAgICogQHJldHVybnMgQW4gb2JzZXJ2YWJsZSBib29sZWFuIG9yIGEgcHJvbWlzZSBvZiBhIGJvb2xlYW5cbiAgICovXG4gIHB1YmxpYyBjYW5BY3RpdmF0ZShcbiAgICByb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdFxuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHwgUHJvbWlzZTxib29sZWFuPiB8IGJvb2xlYW4ge1xuICAgIGNvbnN0IGlzQXV0aGVudGljYXRlZCA9IHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmlzQXV0aGVudGljYXRlZCgpO1xuICAgIGlmIChpc0F1dGhlbnRpY2F0ZWQpIHtcbiAgICAgIGNvbnN0IHVzZXJSb2xlID0gdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuZ2V0UHJpbWFyeVVzZXJSb2xlKCk7XG4gICAgICBpZiAodXNlclJvbGUgPT09ICdhZG1pbicpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FkbWluL2xvZ2luJ10pO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19