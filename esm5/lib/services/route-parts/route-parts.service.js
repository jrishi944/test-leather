import { __decorate, __values } from "tslib";
import { Router, ActivatedRouteSnapshot, ActivatedRoute, NavigationEnd, RouterState, RouterStateSnapshot } from '@angular/router';
import { Injectable, Output, EventEmitter, Directive } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
/**
 * A service to parse route parts
 */
var RoutePartsService = /** @class */ (function () {
    /**
     * Constructor
     * @param router - A reference to the router
     * @param activatedRoute - A reference to the activated route
     */
    function RoutePartsService(router, activatedRoute) {
        var _this = this;
        this.router = router;
        /** An event emitter that will trigger when a route changes */
        this.routeChanged = new EventEmitter();
        var me = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof NavigationEnd) {
                var state = _this.router.routerState;
                var snapshot = state.snapshot;
                var root = snapshot.root;
                var routeParts = _this.generateRouteParts(root);
                me.routeParts = _this.formatRouteParts(routeParts);
                _this.routeChanged.emit(me.routeParts);
            }
        });
    }
    /**
     * Generate the route parts
     * @param snapshot - The activated route snapshot
     * @returns An array of route parts
     */
    RoutePartsService.prototype.generateRouteParts = function (snapshot) {
        var routeParts = [];
        if (snapshot) {
            if (snapshot.firstChild) {
                routeParts = routeParts.concat(this.generateRouteParts(snapshot.firstChild));
            }
            if (snapshot.url.length) {
                routeParts.push({
                    title: snapshot.data['title'],
                    breadcrumb: snapshot.data['breadcrumb'],
                    url: snapshot.url[0].path,
                    urlSegments: snapshot.url,
                    params: snapshot.params
                });
            }
        }
        return routeParts;
    };
    /**
     * Format the route parts
     * @param routeParts - An array of route parts
     * @returns An array of formatted route parts
     */
    RoutePartsService.prototype.formatRouteParts = function (routeParts) {
        var e_1, _a;
        // routeParts.push({
        //     title: 'Home',
        //     breadcrumb: 'Home',
        //     url: '/',
        //     urlSegments: [],
        //     params: {},
        // });
        routeParts.reverse();
        var fullUrl = '';
        try {
            for (var routeParts_1 = __values(routeParts), routeParts_1_1 = routeParts_1.next(); !routeParts_1_1.done; routeParts_1_1 = routeParts_1.next()) {
                var routePart = routeParts_1_1.value;
                if (fullUrl === '') {
                    fullUrl = routePart.url;
                }
                else {
                    if (fullUrl.endsWith('/') === false) {
                        fullUrl += '/';
                    }
                    fullUrl = fullUrl + routePart.url;
                }
                routePart.url = fullUrl;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (routeParts_1_1 && !routeParts_1_1.done && (_a = routeParts_1.return)) _a.call(routeParts_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return routeParts;
    };
    RoutePartsService.ctorParameters = function () { return [
        { type: Router },
        { type: ActivatedRoute }
    ]; };
    RoutePartsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function RoutePartsService_Factory() { return new RoutePartsService(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i1.ActivatedRoute)); }, token: RoutePartsService, providedIn: "root" });
    __decorate([
        Output()
    ], RoutePartsService.prototype, "routeChanged", void 0);
    RoutePartsService = __decorate([
        Directive(),
        Injectable({
            providedIn: 'root'
        })
    ], RoutePartsService);
    return RoutePartsService;
}());
export { RoutePartsService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUtcGFydHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xlYXRoZXJtYW4tYm9vdHN0cmFwLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3JvdXRlLXBhcnRzL3JvdXRlLXBhcnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxNQUFNLEVBQ04sc0JBQXNCLEVBQ3RCLGNBQWMsRUFDZCxhQUFhLEVBQ2IsV0FBVyxFQUNYLG1CQUFtQixFQUNwQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQUc1RTs7R0FFRztBQUtIO0lBT0U7Ozs7T0FJRztJQUNILDJCQUFvQixNQUFjLEVBQUUsY0FBOEI7UUFBbEUsaUJBWUM7UUFabUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQVJsQyw4REFBOEQ7UUFDcEQsaUJBQVksR0FBK0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQVF0RSxJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSztZQUNoQyxJQUFJLEtBQUssWUFBWSxhQUFhLEVBQUU7Z0JBQ2xDLElBQU0sS0FBSyxHQUFnQixLQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztnQkFDbkQsSUFBTSxRQUFRLEdBQXdCLEtBQUssQ0FBQyxRQUFRLENBQUM7Z0JBQ3JELElBQU0sSUFBSSxHQUEyQixRQUFRLENBQUMsSUFBSSxDQUFDO2dCQUNuRCxJQUFNLFVBQVUsR0FBRyxLQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2pELEVBQUUsQ0FBQyxVQUFVLEdBQUcsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUNsRCxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDdkM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksOENBQWtCLEdBQXpCLFVBQTBCLFFBQWdDO1FBQ3hELElBQUksVUFBVSxHQUFpQixFQUFFLENBQUM7UUFDbEMsSUFBSSxRQUFRLEVBQUU7WUFDWixJQUFJLFFBQVEsQ0FBQyxVQUFVLEVBQUU7Z0JBQ3ZCLFVBQVUsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUM1QixJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUM3QyxDQUFDO2FBQ0g7WUFDRCxJQUFJLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFO2dCQUN2QixVQUFVLENBQUMsSUFBSSxDQUFDO29CQUNkLEtBQUssRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztvQkFDN0IsVUFBVSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO29CQUN2QyxHQUFHLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO29CQUN6QixXQUFXLEVBQUUsUUFBUSxDQUFDLEdBQUc7b0JBQ3pCLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTTtpQkFDeEIsQ0FBQyxDQUFDO2FBQ0o7U0FDRjtRQUNELE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksNENBQWdCLEdBQXZCLFVBQXdCLFVBQXdCOztRQUM5QyxvQkFBb0I7UUFDcEIscUJBQXFCO1FBQ3JCLDBCQUEwQjtRQUMxQixnQkFBZ0I7UUFDaEIsdUJBQXVCO1FBQ3ZCLGtCQUFrQjtRQUNsQixNQUFNO1FBQ04sVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3JCLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQzs7WUFDakIsS0FBd0IsSUFBQSxlQUFBLFNBQUEsVUFBVSxDQUFBLHNDQUFBLDhEQUFFO2dCQUEvQixJQUFNLFNBQVMsdUJBQUE7Z0JBQ2xCLElBQUksT0FBTyxLQUFLLEVBQUUsRUFBRTtvQkFDbEIsT0FBTyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUM7aUJBQ3pCO3FCQUFNO29CQUNMLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxLQUFLLEVBQUU7d0JBQ25DLE9BQU8sSUFBSSxHQUFHLENBQUM7cUJBQ2hCO29CQUNELE9BQU8sR0FBRyxPQUFPLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQztpQkFDbkM7Z0JBQ0QsU0FBUyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUM7YUFDekI7Ozs7Ozs7OztRQUNELE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7O2dCQW5FMkIsTUFBTTtnQkFBa0IsY0FBYzs7O0lBUHhEO1FBQVQsTUFBTSxFQUFFOzJEQUErRDtJQUw3RCxpQkFBaUI7UUFKN0IsU0FBUyxFQUFFO1FBQ1gsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLGlCQUFpQixDQWdGN0I7NEJBbEdEO0NBa0dDLEFBaEZELElBZ0ZDO1NBaEZZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFJvdXRlcixcbiAgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgQWN0aXZhdGVkUm91dGUsXG4gIE5hdmlnYXRpb25FbmQsXG4gIFJvdXRlclN0YXRlLFxuICBSb3V0ZXJTdGF0ZVNuYXBzaG90XG59IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJUm91dGVQYXJ0IH0gZnJvbSAnLi9faW50ZXJmYWNlcy9yb3V0ZS1wYXJ0LmludGVyZmFjZSc7XG5cbi8qKlxuICogQSBzZXJ2aWNlIHRvIHBhcnNlIHJvdXRlIHBhcnRzXG4gKi9cbkBEaXJlY3RpdmUoKVxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUm91dGVQYXJ0c1NlcnZpY2Uge1xuICAvKiogQW4gYXJyYXkgb2Ygcm91dGUgcGFydHMgKi9cbiAgcHVibGljIHJvdXRlUGFydHM6IElSb3V0ZVBhcnRbXTtcblxuICAvKiogQW4gZXZlbnQgZW1pdHRlciB0aGF0IHdpbGwgdHJpZ2dlciB3aGVuIGEgcm91dGUgY2hhbmdlcyAqL1xuICBAT3V0cHV0KCkgcm91dGVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8SVJvdXRlUGFydFtdPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICogQHBhcmFtIHJvdXRlciAtIEEgcmVmZXJlbmNlIHRvIHRoZSByb3V0ZXJcbiAgICogQHBhcmFtIGFjdGl2YXRlZFJvdXRlIC0gQSByZWZlcmVuY2UgdG8gdGhlIGFjdGl2YXRlZCByb3V0ZVxuICAgKi9cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XG4gICAgY29uc3QgbWUgPSB0aGlzO1xuICAgIHRoaXMucm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkge1xuICAgICAgICBjb25zdCBzdGF0ZTogUm91dGVyU3RhdGUgPSB0aGlzLnJvdXRlci5yb3V0ZXJTdGF0ZTtcbiAgICAgICAgY29uc3Qgc25hcHNob3Q6IFJvdXRlclN0YXRlU25hcHNob3QgPSBzdGF0ZS5zbmFwc2hvdDtcbiAgICAgICAgY29uc3Qgcm9vdDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCA9IHNuYXBzaG90LnJvb3Q7XG4gICAgICAgIGNvbnN0IHJvdXRlUGFydHMgPSB0aGlzLmdlbmVyYXRlUm91dGVQYXJ0cyhyb290KTtcbiAgICAgICAgbWUucm91dGVQYXJ0cyA9IHRoaXMuZm9ybWF0Um91dGVQYXJ0cyhyb3V0ZVBhcnRzKTtcbiAgICAgICAgdGhpcy5yb3V0ZUNoYW5nZWQuZW1pdChtZS5yb3V0ZVBhcnRzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZSB0aGUgcm91dGUgcGFydHNcbiAgICogQHBhcmFtIHNuYXBzaG90IC0gVGhlIGFjdGl2YXRlZCByb3V0ZSBzbmFwc2hvdFxuICAgKiBAcmV0dXJucyBBbiBhcnJheSBvZiByb3V0ZSBwYXJ0c1xuICAgKi9cbiAgcHVibGljIGdlbmVyYXRlUm91dGVQYXJ0cyhzbmFwc2hvdDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IElSb3V0ZVBhcnRbXSB7XG4gICAgbGV0IHJvdXRlUGFydHMgPSA8SVJvdXRlUGFydFtdPltdO1xuICAgIGlmIChzbmFwc2hvdCkge1xuICAgICAgaWYgKHNuYXBzaG90LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgcm91dGVQYXJ0cyA9IHJvdXRlUGFydHMuY29uY2F0KFxuICAgICAgICAgIHRoaXMuZ2VuZXJhdGVSb3V0ZVBhcnRzKHNuYXBzaG90LmZpcnN0Q2hpbGQpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAoc25hcHNob3QudXJsLmxlbmd0aCkge1xuICAgICAgICByb3V0ZVBhcnRzLnB1c2goe1xuICAgICAgICAgIHRpdGxlOiBzbmFwc2hvdC5kYXRhWyd0aXRsZSddLFxuICAgICAgICAgIGJyZWFkY3J1bWI6IHNuYXBzaG90LmRhdGFbJ2JyZWFkY3J1bWInXSxcbiAgICAgICAgICB1cmw6IHNuYXBzaG90LnVybFswXS5wYXRoLFxuICAgICAgICAgIHVybFNlZ21lbnRzOiBzbmFwc2hvdC51cmwsXG4gICAgICAgICAgcGFyYW1zOiBzbmFwc2hvdC5wYXJhbXNcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByb3V0ZVBhcnRzO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvcm1hdCB0aGUgcm91dGUgcGFydHNcbiAgICogQHBhcmFtIHJvdXRlUGFydHMgLSBBbiBhcnJheSBvZiByb3V0ZSBwYXJ0c1xuICAgKiBAcmV0dXJucyBBbiBhcnJheSBvZiBmb3JtYXR0ZWQgcm91dGUgcGFydHNcbiAgICovXG4gIHB1YmxpYyBmb3JtYXRSb3V0ZVBhcnRzKHJvdXRlUGFydHM6IElSb3V0ZVBhcnRbXSk6IElSb3V0ZVBhcnRbXSB7XG4gICAgLy8gcm91dGVQYXJ0cy5wdXNoKHtcbiAgICAvLyAgICAgdGl0bGU6ICdIb21lJyxcbiAgICAvLyAgICAgYnJlYWRjcnVtYjogJ0hvbWUnLFxuICAgIC8vICAgICB1cmw6ICcvJyxcbiAgICAvLyAgICAgdXJsU2VnbWVudHM6IFtdLFxuICAgIC8vICAgICBwYXJhbXM6IHt9LFxuICAgIC8vIH0pO1xuICAgIHJvdXRlUGFydHMucmV2ZXJzZSgpO1xuICAgIGxldCBmdWxsVXJsID0gJyc7XG4gICAgZm9yIChjb25zdCByb3V0ZVBhcnQgb2Ygcm91dGVQYXJ0cykge1xuICAgICAgaWYgKGZ1bGxVcmwgPT09ICcnKSB7XG4gICAgICAgIGZ1bGxVcmwgPSByb3V0ZVBhcnQudXJsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGZ1bGxVcmwuZW5kc1dpdGgoJy8nKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBmdWxsVXJsICs9ICcvJztcbiAgICAgICAgfVxuICAgICAgICBmdWxsVXJsID0gZnVsbFVybCArIHJvdXRlUGFydC51cmw7XG4gICAgICB9XG4gICAgICByb3V0ZVBhcnQudXJsID0gZnVsbFVybDtcbiAgICB9XG4gICAgcmV0dXJuIHJvdXRlUGFydHM7XG4gIH1cbn1cbiJdfQ==