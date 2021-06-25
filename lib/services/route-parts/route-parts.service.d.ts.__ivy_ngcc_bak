import { Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { IRoutePart } from './_interfaces/route-part.interface';
/**
 * A service to parse route parts
 */
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
}
