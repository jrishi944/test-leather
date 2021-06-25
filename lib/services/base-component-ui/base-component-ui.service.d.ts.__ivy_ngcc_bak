import { Subject } from 'rxjs';
/**
 * A base UI service for components. This service allows sub-components to communicate the components
 * without maintaining a direct reference.
 */
export declare class BaseComponentUIService {
    /** A delete request RXJS subject */
    deleteRequestSubject$: Subject<string>;
    /** An edit request RXJS subject */
    editRequestSubject$: Subject<string>;
    /** A clone request RXJS subject */
    cloneRequestSubject$: Subject<string>;
    /**
     * Broadcast a clone request
     * @param id - The ID of the object associated with the request
     */
    cloneRequest(id: string): void;
    /**
     * Broadcast a delete request
     * @param id - The ID of the object associated with the request
     */
    deleteRequest(id: string): void;
    /**
     * Broadcast an edit request
     * @param id - The ID of the object associated with the request
     */
    editRequest(id: string): void;
    /**
     * Subscribe to an RXJS subject
     * @param subjectName - The name of the subject to subscribe to
     * @param callback - The method to callback
     */
    subscribe(subjectName: string, callback: (result: any) => Promise<void> | void): void;
}
