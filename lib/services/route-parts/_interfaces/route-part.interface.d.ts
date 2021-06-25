import { Params } from '@angular/router';
/**
 * An interface to define a route part object
 */
export interface IRoutePart {
    /** The title of the route part */
    title: string;
    /** The breadcrumb to display */
    breadcrumb: string;
    /** The route part parameters */
    params?: Params;
    /** The route part URL */
    url: string;
    /** The route part's URL segments */
    urlSegments: any[];
}
