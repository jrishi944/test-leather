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
var UserAuthGuardService = /** @class */ (function () {
    /**
     * Constructor
     * @param authenticationService - A reference to the authentication service
     * @param router - A reference to the router
     */
    function UserAuthGuardService(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    /**
     * Determine whether a route can be activated
     * @param route - The activated route snapshot
     * @param state - The router state snapshot
     * @returns An observable boolean or a promise of a boolean
     */
    UserAuthGuardService.prototype.canActivate = function (route, state) {
        if (this.authenticationService.isAuthenticated()) {
            return true;
        }
        this.router.navigate(['/']);
        return false;
    };
    UserAuthGuardService.ctorParameters = function () { return [
        { type: AuthenticationService },
        { type: Router }
    ]; };
    UserAuthGuardService.ɵprov = i0.ɵɵdefineInjectable({ factory: function UserAuthGuardService_Factory() { return new UserAuthGuardService(i0.ɵɵinject(i1.AuthenticationService), i0.ɵɵinject(i2.Router)); }, token: UserAuthGuardService, providedIn: "root" });
    UserAuthGuardService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], UserAuthGuardService);
    return UserAuthGuardService;
}());
export { UserAuthGuardService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hdXRoLWd1YXJkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sZWF0aGVybWFuLWJvb3RzdHJhcC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hdXRoLWd1YXJkL3VzZXItYXV0aC1ndWFyZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFDTCxXQUFXLEVBQ1gsc0JBQXNCLEVBQ3RCLG1CQUFtQixFQUNuQixNQUFNLEVBQ1AsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQzs7OztBQUVqRjs7R0FFRztBQUlIO0lBQ0U7Ozs7T0FJRztJQUNILDhCQUNVLHFCQUE0QyxFQUM1QyxNQUFjO1FBRGQsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM1QyxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQ3JCLENBQUM7SUFFSjs7Ozs7T0FLRztJQUNJLDBDQUFXLEdBQWxCLFVBQ0UsS0FBNkIsRUFDN0IsS0FBMEI7UUFFMUIsSUFBSSxJQUFJLENBQUMscUJBQXFCLENBQUMsZUFBZSxFQUFFLEVBQUU7WUFDaEQsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM1QixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7O2dCQW5CZ0MscUJBQXFCO2dCQUNwQyxNQUFNOzs7SUFSYixvQkFBb0I7UUFIaEMsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLG9CQUFvQixDQTJCaEM7K0JBM0NEO0NBMkNDLEFBM0JELElBMkJDO1NBM0JZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENhbkFjdGl2YXRlLFxuICBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICBSb3V0ZXJTdGF0ZVNuYXBzaG90LFxuICBSb3V0ZXJcbn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuXG4vKipcbiAqIEEgc2VydmljZSB1c2VkIHRvIGxpbWl0IGFjY2VzcyB0byBhIHJvdXRlIHRvIHJlZ2lzdGVyZWQgdXNlcnNcbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVXNlckF1dGhHdWFyZFNlcnZpY2UgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0gYXV0aGVudGljYXRpb25TZXJ2aWNlIC0gQSByZWZlcmVuY2UgdG8gdGhlIGF1dGhlbnRpY2F0aW9uIHNlcnZpY2VcbiAgICogQHBhcmFtIHJvdXRlciAtIEEgcmVmZXJlbmNlIHRvIHRoZSByb3V0ZXJcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuICApIHt9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSB3aGV0aGVyIGEgcm91dGUgY2FuIGJlIGFjdGl2YXRlZFxuICAgKiBAcGFyYW0gcm91dGUgLSBUaGUgYWN0aXZhdGVkIHJvdXRlIHNuYXBzaG90XG4gICAqIEBwYXJhbSBzdGF0ZSAtIFRoZSByb3V0ZXIgc3RhdGUgc25hcHNob3RcbiAgICogQHJldHVybnMgQW4gb2JzZXJ2YWJsZSBib29sZWFuIG9yIGEgcHJvbWlzZSBvZiBhIGJvb2xlYW5cbiAgICovXG4gIHB1YmxpYyBjYW5BY3RpdmF0ZShcbiAgICByb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdFxuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHwgUHJvbWlzZTxib29sZWFuPiB8IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5pc0F1dGhlbnRpY2F0ZWQoKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLyddKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==