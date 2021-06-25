import { Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { IRoutePart } from './_interfaces/route-part.interface';
/**
 * A service to parse route parts
 */
import * as ɵngcc0 from '@angular/core';
export declare class RoutePartsService {
    private router;
    /** An array of route parts */
    routeParts: IRoutePart[];
    /** An event emitter that will trigger when a route changes */
    routeChanged: EventEmitter<IRoutePart[]>;
    /**
     * Constructor
     * @param router - A reference to the router
     * @param activatedRoute - A reference to the activated route
     */
    constructor(router: Router, activatedRoute: ActivatedRoute);
    /**
     * Generate the route parts
     * @param snapshot - The activated route snapshot
     * @returns An array of route parts
     */
    generateRouteParts(snapshot: ActivatedRouteSnapshot): IRoutePart[];
    /**
     * Format the route parts
     * @param routeParts - An array of route parts
     * @returns An array of formatted route parts
     */
    formatRouteParts(routeParts: IRoutePart[]): IRoutePart[];
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RoutePartsService, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<RoutePartsService, never, never, {}, { "routeChanged": "routeChanged"; }, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUtcGFydHMuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJyb3V0ZS1wYXJ0cy5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSVJvdXRlUGFydCB9IGZyb20gJy4vX2ludGVyZmFjZXMvcm91dGUtcGFydC5pbnRlcmZhY2UnO1xuLyoqXG4gKiBBIHNlcnZpY2UgdG8gcGFyc2Ugcm91dGUgcGFydHNcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUm91dGVQYXJ0c1NlcnZpY2Uge1xuICAgIHByaXZhdGUgcm91dGVyO1xuICAgIC8qKiBBbiBhcnJheSBvZiByb3V0ZSBwYXJ0cyAqL1xuICAgIHJvdXRlUGFydHM6IElSb3V0ZVBhcnRbXTtcbiAgICAvKiogQW4gZXZlbnQgZW1pdHRlciB0aGF0IHdpbGwgdHJpZ2dlciB3aGVuIGEgcm91dGUgY2hhbmdlcyAqL1xuICAgIHJvdXRlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPElSb3V0ZVBhcnRbXT47XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0gcm91dGVyIC0gQSByZWZlcmVuY2UgdG8gdGhlIHJvdXRlclxuICAgICAqIEBwYXJhbSBhY3RpdmF0ZWRSb3V0ZSAtIEEgcmVmZXJlbmNlIHRvIHRoZSBhY3RpdmF0ZWQgcm91dGVcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihyb3V0ZXI6IFJvdXRlciwgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKTtcbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZSB0aGUgcm91dGUgcGFydHNcbiAgICAgKiBAcGFyYW0gc25hcHNob3QgLSBUaGUgYWN0aXZhdGVkIHJvdXRlIHNuYXBzaG90XG4gICAgICogQHJldHVybnMgQW4gYXJyYXkgb2Ygcm91dGUgcGFydHNcbiAgICAgKi9cbiAgICBnZW5lcmF0ZVJvdXRlUGFydHMoc25hcHNob3Q6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBJUm91dGVQYXJ0W107XG4gICAgLyoqXG4gICAgICogRm9ybWF0IHRoZSByb3V0ZSBwYXJ0c1xuICAgICAqIEBwYXJhbSByb3V0ZVBhcnRzIC0gQW4gYXJyYXkgb2Ygcm91dGUgcGFydHNcbiAgICAgKiBAcmV0dXJucyBBbiBhcnJheSBvZiBmb3JtYXR0ZWQgcm91dGUgcGFydHNcbiAgICAgKi9cbiAgICBmb3JtYXRSb3V0ZVBhcnRzKHJvdXRlUGFydHM6IElSb3V0ZVBhcnRbXSk6IElSb3V0ZVBhcnRbXTtcbn1cbiJdfQ==