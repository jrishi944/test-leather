import { __decorate } from "tslib";
import { Router, ActivatedRouteSnapshot, ActivatedRoute, NavigationEnd, RouterState, RouterStateSnapshot } from '@angular/router';
import { Injectable, Output, EventEmitter, Directive } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
/**
 * A service to parse route parts
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/router';
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
RoutePartsService.ɵfac = function RoutePartsService_Factory(t) { return new (t || RoutePartsService)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Router), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.ActivatedRoute)); };
RoutePartsService.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: RoutePartsService, outputs: { routeChanged: "routeChanged" } });
RoutePartsService.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute }
];
RoutePartsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function RoutePartsService_Factory() { return new RoutePartsService(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i1.ActivatedRoute)); }, token: RoutePartsService, providedIn: "root" });
__decorate([
    Output()
], RoutePartsService.prototype, "routeChanged", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(RoutePartsService, [{
        type: Directive
    }, {
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ɵngcc1.Router }, { type: ɵngcc1.ActivatedRoute }]; }, { routeChanged: [{
            type: Output
        }] }); })();
export { RoutePartsService };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUtcGFydHMuc2VydmljZS5qcyIsInNvdXJjZXMiOlsibmc6L2xlYXRoZXJtYW4tYm9vdHN0cmFwL2xpYi9zZXJ2aWNlcy9yb3V0ZS1wYXJ0cy9yb3V0ZS1wYXJ0cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsTUFBTSxFQUNOLHNCQUFzQixFQUN0QixjQUFjLEVBQ2QsYUFBYSxFQUNiLFdBQVcsRUFDWCxtQkFBbUIsRUFDcEIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVFO0FBQXFDO0FBRXJDO0FBQ0E7QUFDQSxHQUFHOzs7QUFLSCxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtBQUM5QixJQU1FO0FBQ0Y7QUFDRTtBQUNFO0FBRUosT0FESztBQUNMLElBQUUsWUFBb0IsTUFBYyxFQUFFLGNBQThCO0FBQ3BFLFFBRHNCLFdBQU0sR0FBTixNQUFNLENBQVE7QUFBQyxRQVJuQyw4REFBOEQ7QUFDaEUsUUFBWSxpQkFBWSxHQUErQixJQUFJLFlBQVksRUFBRSxDQUFDO0FBQzFFLFFBT0ksTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDO0FBQ3BCLFFBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQ3pDLFlBQU0sSUFBSSxLQUFLLFlBQVksYUFBYSxFQUFFO0FBQzFDLGdCQUFRLE1BQU0sS0FBSyxHQUFnQixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztBQUMzRCxnQkFBUSxNQUFNLFFBQVEsR0FBd0IsS0FBSyxDQUFDLFFBQVEsQ0FBQztBQUM3RCxnQkFBUSxNQUFNLElBQUksR0FBMkIsUUFBUSxDQUFDLElBQUksQ0FBQztBQUMzRCxnQkFBUSxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFB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QWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgQWN0aXZhdGVkUm91dGUsXG4gIE5hdmlnYXRpb25FbmQsXG4gIFJvdXRlclN0YXRlLFxuICBSb3V0ZXJTdGF0ZVNuYXBzaG90XG59IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJUm91dGVQYXJ0IH0gZnJvbSAnLi9faW50ZXJmYWNlcy9yb3V0ZS1wYXJ0LmludGVyZmFjZSc7XG5cbi8qKlxuICogQSBzZXJ2aWNlIHRvIHBhcnNlIHJvdXRlIHBhcnRzXG4gKi9cbkBEaXJlY3RpdmUoKVxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUm91dGVQYXJ0c1NlcnZpY2Uge1xuICAvKiogQW4gYXJyYXkgb2Ygcm91dGUgcGFydHMgKi9cbiAgcHVibGljIHJvdXRlUGFydHM6IElSb3V0ZVBhcnRbXTtcblxuICAvKiogQW4gZXZlbnQgZW1pdHRlciB0aGF0IHdpbGwgdHJpZ2dlciB3aGVuIGEgcm91dGUgY2hhbmdlcyAqL1xuICBAT3V0cHV0KCkgcm91dGVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8SVJvdXRlUGFydFtdPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICogQHBhcmFtIHJvdXRlciAtIEEgcmVmZXJlbmNlIHRvIHRoZSByb3V0ZXJcbiAgICogQHBhcmFtIGFjdGl2YXRlZFJvdXRlIC0gQSByZWZlcmVuY2UgdG8gdGhlIGFjdGl2YXRlZCByb3V0ZVxuICAgKi9cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XG4gICAgY29uc3QgbWUgPSB0aGlzO1xuICAgIHRoaXMucm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkge1xuICAgICAgICBjb25zdCBzdGF0ZTogUm91dGVyU3RhdGUgPSB0aGlzLnJvdXRlci5yb3V0ZXJTdGF0ZTtcbiAgICAgICAgY29uc3Qgc25hcHNob3Q6IFJvdXRlclN0YXRlU25hcHNob3QgPSBzdGF0ZS5zbmFwc2hvdDtcbiAgICAgICAgY29uc3Qgcm9vdDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCA9IHNuYXBzaG90LnJvb3Q7XG4gICAgICAgIGNvbnN0IHJvdXRlUGFydHMgPSB0aGlzLmdlbmVyYXRlUm91dGVQYXJ0cyhyb290KTtcbiAgICAgICAgbWUucm91dGVQYXJ0cyA9IHRoaXMuZm9ybWF0Um91dGVQYXJ0cyhyb3V0ZVBhcnRzKTtcbiAgICAgICAgdGhpcy5yb3V0ZUNoYW5nZWQuZW1pdChtZS5yb3V0ZVBhcnRzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZSB0aGUgcm91dGUgcGFydHNcbiAgICogQHBhcmFtIHNuYXBzaG90IC0gVGhlIGFjdGl2YXRlZCByb3V0ZSBzbmFwc2hvdFxuICAgKiBAcmV0dXJucyBBbiBhcnJheSBvZiByb3V0ZSBwYXJ0c1xuICAgKi9cbiAgcHVibGljIGdlbmVyYXRlUm91dGVQYXJ0cyhzbmFwc2hvdDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IElSb3V0ZVBhcnRbXSB7XG4gICAgbGV0IHJvdXRlUGFydHMgPSA8SVJvdXRlUGFydFtdPltdO1xuICAgIGlmIChzbmFwc2hvdCkge1xuICAgICAgaWYgKHNuYXBzaG90LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgcm91dGVQYXJ0cyA9IHJvdXRlUGFydHMuY29uY2F0KFxuICAgICAgICAgIHRoaXMuZ2VuZXJhdGVSb3V0ZVBhcnRzKHNuYXBzaG90LmZpcnN0Q2hpbGQpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAoc25hcHNob3QudXJsLmxlbmd0aCkge1xuICAgICAgICByb3V0ZVBhcnRzLnB1c2goe1xuICAgICAgICAgIHRpdGxlOiBzbmFwc2hvdC5kYXRhWyd0aXRsZSddLFxuICAgICAgICAgIGJyZWFkY3J1bWI6IHNuYXBzaG90LmRhdGFbJ2JyZWFkY3J1bWInXSxcbiAgICAgICAgICB1cmw6IHNuYXBzaG90LnVybFswXS5wYXRoLFxuICAgICAgICAgIHVybFNlZ21lbnRzOiBzbmFwc2hvdC51cmwsXG4gICAgICAgICAgcGFyYW1zOiBzbmFwc2hvdC5wYXJhbXNcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByb3V0ZVBhcnRzO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvcm1hdCB0aGUgcm91dGUgcGFydHNcbiAgICogQHBhcmFtIHJvdXRlUGFydHMgLSBBbiBhcnJheSBvZiByb3V0ZSBwYXJ0c1xuICAgKiBAcmV0dXJucyBBbiBhcnJheSBvZiBmb3JtYXR0ZWQgcm91dGUgcGFydHNcbiAgICovXG4gIHB1YmxpYyBmb3JtYXRSb3V0ZVBhcnRzKHJvdXRlUGFydHM6IElSb3V0ZVBhcnRbXSk6IElSb3V0ZVBhcnRbXSB7XG4gICAgLy8gcm91dGVQYXJ0cy5wdXNoKHtcbiAgICAvLyAgICAgdGl0bGU6ICdIb21lJyxcbiAgICAvLyAgICAgYnJlYWRjcnVtYjogJ0hvbWUnLFxuICAgIC8vICAgICB1cmw6ICcvJyxcbiAgICAvLyAgICAgdXJsU2VnbWVudHM6IFtdLFxuICAgIC8vICAgICBwYXJhbXM6IHt9LFxuICAgIC8vIH0pO1xuICAgIHJvdXRlUGFydHMucmV2ZXJzZSgpO1xuICAgIGxldCBmdWxsVXJsID0gJyc7XG4gICAgZm9yIChjb25zdCByb3V0ZVBhcnQgb2Ygcm91dGVQYXJ0cykge1xuICAgICAgaWYgKGZ1bGxVcmwgPT09ICcnKSB7XG4gICAgICAgIGZ1bGxVcmwgPSByb3V0ZVBhcnQudXJsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGZ1bGxVcmwuZW5kc1dpdGgoJy8nKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBmdWxsVXJsICs9ICcvJztcbiAgICAgICAgfVxuICAgICAgICBmdWxsVXJsID0gZnVsbFVybCArIHJvdXRlUGFydC51cmw7XG4gICAgICB9XG4gICAgICByb3V0ZVBhcnQudXJsID0gZnVsbFVybDtcbiAgICB9XG4gICAgcmV0dXJuIHJvdXRlUGFydHM7XG4gIH1cbn1cbiJdfQ==