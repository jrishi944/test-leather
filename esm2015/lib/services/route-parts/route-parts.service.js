import { __decorate } from "tslib";
import { Router, ActivatedRouteSnapshot, ActivatedRoute, NavigationEnd, RouterState, RouterStateSnapshot } from '@angular/router';
import { Injectable, Output, EventEmitter, Directive } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
/**
 * A service to parse route parts
 */
let RoutePartsService = class RoutePartsService {
    /**
     * Constructor
     * @param router - A reference to the router
     * @param activatedRoute - A reference to the activated route
     */
    constructor(router, activatedRoute) {
        this.router = router;
        /** An event emitter that will trigger when a route changes */
        this.routeChanged = new EventEmitter();
        const me = this;
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                const state = this.router.routerState;
                const snapshot = state.snapshot;
                const root = snapshot.root;
                const routeParts = this.generateRouteParts(root);
                me.routeParts = this.formatRouteParts(routeParts);
                this.routeChanged.emit(me.routeParts);
            }
        });
    }
    /**
     * Generate the route parts
     * @param snapshot - The activated route snapshot
     * @returns An array of route parts
     */
    generateRouteParts(snapshot) {
        let routeParts = [];
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
    }
    /**
     * Format the route parts
     * @param routeParts - An array of route parts
     * @returns An array of formatted route parts
     */
    formatRouteParts(routeParts) {
        // routeParts.push({
        //     title: 'Home',
        //     breadcrumb: 'Home',
        //     url: '/',
        //     urlSegments: [],
        //     params: {},
        // });
        routeParts.reverse();
        let fullUrl = '';
        for (const routePart of routeParts) {
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
        return routeParts;
    }
};
RoutePartsService.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute }
];
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
export { RoutePartsService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUtcGFydHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xlYXRoZXJtYW4tYm9vdHN0cmFwLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3JvdXRlLXBhcnRzL3JvdXRlLXBhcnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxNQUFNLEVBQ04sc0JBQXNCLEVBQ3RCLGNBQWMsRUFDZCxhQUFhLEVBQ2IsV0FBVyxFQUNYLG1CQUFtQixFQUNwQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQUc1RTs7R0FFRztBQUtILElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0lBTzVCOzs7O09BSUc7SUFDSCxZQUFvQixNQUFjLEVBQUUsY0FBOEI7UUFBOUMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQVJsQyw4REFBOEQ7UUFDcEQsaUJBQVksR0FBK0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQVF0RSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ25DLElBQUksS0FBSyxZQUFZLGFBQWEsRUFBRTtnQkFDbEMsTUFBTSxLQUFLLEdBQWdCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDO2dCQUNuRCxNQUFNLFFBQVEsR0FBd0IsS0FBSyxDQUFDLFFBQVEsQ0FBQztnQkFDckQsTUFBTSxJQUFJLEdBQTJCLFFBQVEsQ0FBQyxJQUFJLENBQUM7Z0JBQ25ELE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDakQsRUFBRSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ2xELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUN2QztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxrQkFBa0IsQ0FBQyxRQUFnQztRQUN4RCxJQUFJLFVBQVUsR0FBaUIsRUFBRSxDQUFDO1FBQ2xDLElBQUksUUFBUSxFQUFFO1lBQ1osSUFBSSxRQUFRLENBQUMsVUFBVSxFQUFFO2dCQUN2QixVQUFVLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FDNUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FDN0MsQ0FBQzthQUNIO1lBQ0QsSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRTtnQkFDdkIsVUFBVSxDQUFDLElBQUksQ0FBQztvQkFDZCxLQUFLLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7b0JBQzdCLFVBQVUsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztvQkFDdkMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtvQkFDekIsV0FBVyxFQUFFLFFBQVEsQ0FBQyxHQUFHO29CQUN6QixNQUFNLEVBQUUsUUFBUSxDQUFDLE1BQU07aUJBQ3hCLENBQUMsQ0FBQzthQUNKO1NBQ0Y7UUFDRCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLGdCQUFnQixDQUFDLFVBQXdCO1FBQzlDLG9CQUFvQjtRQUNwQixxQkFBcUI7UUFDckIsMEJBQTBCO1FBQzFCLGdCQUFnQjtRQUNoQix1QkFBdUI7UUFDdkIsa0JBQWtCO1FBQ2xCLE1BQU07UUFDTixVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDckIsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLEtBQUssTUFBTSxTQUFTLElBQUksVUFBVSxFQUFFO1lBQ2xDLElBQUksT0FBTyxLQUFLLEVBQUUsRUFBRTtnQkFDbEIsT0FBTyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUM7YUFDekI7aUJBQU07Z0JBQ0wsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEtBQUssRUFBRTtvQkFDbkMsT0FBTyxJQUFJLEdBQUcsQ0FBQztpQkFDaEI7Z0JBQ0QsT0FBTyxHQUFHLE9BQU8sR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDO2FBQ25DO1lBQ0QsU0FBUyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUM7U0FDekI7UUFDRCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0NBQ0YsQ0FBQTs7WUFwRTZCLE1BQU07WUFBa0IsY0FBYzs7O0FBUHhEO0lBQVQsTUFBTSxFQUFFO3VEQUErRDtBQUw3RCxpQkFBaUI7SUFKN0IsU0FBUyxFQUFFO0lBQ1gsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLGlCQUFpQixDQWdGN0I7U0FoRlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgUm91dGVyLFxuICBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICBBY3RpdmF0ZWRSb3V0ZSxcbiAgTmF2aWdhdGlvbkVuZCxcbiAgUm91dGVyU3RhdGUsXG4gIFJvdXRlclN0YXRlU25hcHNob3Rcbn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEluamVjdGFibGUsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElSb3V0ZVBhcnQgfSBmcm9tICcuL19pbnRlcmZhY2VzL3JvdXRlLXBhcnQuaW50ZXJmYWNlJztcblxuLyoqXG4gKiBBIHNlcnZpY2UgdG8gcGFyc2Ugcm91dGUgcGFydHNcbiAqL1xuQERpcmVjdGl2ZSgpXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBSb3V0ZVBhcnRzU2VydmljZSB7XG4gIC8qKiBBbiBhcnJheSBvZiByb3V0ZSBwYXJ0cyAqL1xuICBwdWJsaWMgcm91dGVQYXJ0czogSVJvdXRlUGFydFtdO1xuXG4gIC8qKiBBbiBldmVudCBlbWl0dGVyIHRoYXQgd2lsbCB0cmlnZ2VyIHdoZW4gYSByb3V0ZSBjaGFuZ2VzICovXG4gIEBPdXRwdXQoKSByb3V0ZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxJUm91dGVQYXJ0W10+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0gcm91dGVyIC0gQSByZWZlcmVuY2UgdG8gdGhlIHJvdXRlclxuICAgKiBAcGFyYW0gYWN0aXZhdGVkUm91dGUgLSBBIHJlZmVyZW5jZSB0byB0aGUgYWN0aXZhdGVkIHJvdXRlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcbiAgICBjb25zdCBtZSA9IHRoaXM7XG4gICAgdGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZShldmVudCA9PiB7XG4gICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlOiBSb3V0ZXJTdGF0ZSA9IHRoaXMucm91dGVyLnJvdXRlclN0YXRlO1xuICAgICAgICBjb25zdCBzbmFwc2hvdDogUm91dGVyU3RhdGVTbmFwc2hvdCA9IHN0YXRlLnNuYXBzaG90O1xuICAgICAgICBjb25zdCByb290OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90ID0gc25hcHNob3Qucm9vdDtcbiAgICAgICAgY29uc3Qgcm91dGVQYXJ0cyA9IHRoaXMuZ2VuZXJhdGVSb3V0ZVBhcnRzKHJvb3QpO1xuICAgICAgICBtZS5yb3V0ZVBhcnRzID0gdGhpcy5mb3JtYXRSb3V0ZVBhcnRzKHJvdXRlUGFydHMpO1xuICAgICAgICB0aGlzLnJvdXRlQ2hhbmdlZC5lbWl0KG1lLnJvdXRlUGFydHMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIHRoZSByb3V0ZSBwYXJ0c1xuICAgKiBAcGFyYW0gc25hcHNob3QgLSBUaGUgYWN0aXZhdGVkIHJvdXRlIHNuYXBzaG90XG4gICAqIEByZXR1cm5zIEFuIGFycmF5IG9mIHJvdXRlIHBhcnRzXG4gICAqL1xuICBwdWJsaWMgZ2VuZXJhdGVSb3V0ZVBhcnRzKHNuYXBzaG90OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogSVJvdXRlUGFydFtdIHtcbiAgICBsZXQgcm91dGVQYXJ0cyA9IDxJUm91dGVQYXJ0W10+W107XG4gICAgaWYgKHNuYXBzaG90KSB7XG4gICAgICBpZiAoc25hcHNob3QuZmlyc3RDaGlsZCkge1xuICAgICAgICByb3V0ZVBhcnRzID0gcm91dGVQYXJ0cy5jb25jYXQoXG4gICAgICAgICAgdGhpcy5nZW5lcmF0ZVJvdXRlUGFydHMoc25hcHNob3QuZmlyc3RDaGlsZClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmIChzbmFwc2hvdC51cmwubGVuZ3RoKSB7XG4gICAgICAgIHJvdXRlUGFydHMucHVzaCh7XG4gICAgICAgICAgdGl0bGU6IHNuYXBzaG90LmRhdGFbJ3RpdGxlJ10sXG4gICAgICAgICAgYnJlYWRjcnVtYjogc25hcHNob3QuZGF0YVsnYnJlYWRjcnVtYiddLFxuICAgICAgICAgIHVybDogc25hcHNob3QudXJsWzBdLnBhdGgsXG4gICAgICAgICAgdXJsU2VnbWVudHM6IHNuYXBzaG90LnVybCxcbiAgICAgICAgICBwYXJhbXM6IHNuYXBzaG90LnBhcmFtc1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJvdXRlUGFydHM7XG4gIH1cblxuICAvKipcbiAgICogRm9ybWF0IHRoZSByb3V0ZSBwYXJ0c1xuICAgKiBAcGFyYW0gcm91dGVQYXJ0cyAtIEFuIGFycmF5IG9mIHJvdXRlIHBhcnRzXG4gICAqIEByZXR1cm5zIEFuIGFycmF5IG9mIGZvcm1hdHRlZCByb3V0ZSBwYXJ0c1xuICAgKi9cbiAgcHVibGljIGZvcm1hdFJvdXRlUGFydHMocm91dGVQYXJ0czogSVJvdXRlUGFydFtdKTogSVJvdXRlUGFydFtdIHtcbiAgICAvLyByb3V0ZVBhcnRzLnB1c2goe1xuICAgIC8vICAgICB0aXRsZTogJ0hvbWUnLFxuICAgIC8vICAgICBicmVhZGNydW1iOiAnSG9tZScsXG4gICAgLy8gICAgIHVybDogJy8nLFxuICAgIC8vICAgICB1cmxTZWdtZW50czogW10sXG4gICAgLy8gICAgIHBhcmFtczoge30sXG4gICAgLy8gfSk7XG4gICAgcm91dGVQYXJ0cy5yZXZlcnNlKCk7XG4gICAgbGV0IGZ1bGxVcmwgPSAnJztcbiAgICBmb3IgKGNvbnN0IHJvdXRlUGFydCBvZiByb3V0ZVBhcnRzKSB7XG4gICAgICBpZiAoZnVsbFVybCA9PT0gJycpIHtcbiAgICAgICAgZnVsbFVybCA9IHJvdXRlUGFydC51cmw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZnVsbFVybC5lbmRzV2l0aCgnLycpID09PSBmYWxzZSkge1xuICAgICAgICAgIGZ1bGxVcmwgKz0gJy8nO1xuICAgICAgICB9XG4gICAgICAgIGZ1bGxVcmwgPSBmdWxsVXJsICsgcm91dGVQYXJ0LnVybDtcbiAgICAgIH1cbiAgICAgIHJvdXRlUGFydC51cmwgPSBmdWxsVXJsO1xuICAgIH1cbiAgICByZXR1cm4gcm91dGVQYXJ0cztcbiAgfVxufVxuIl19