import { Subject } from 'rxjs';
/**
 * A base UI service for components. This service allows sub-components to communicate the components
 * without maintaining a direct reference.
 */
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BaseComponentUIService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1jb21wb25lbnQtdWkuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJiYXNlLWNvbXBvbmVudC11aS5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbi8qKlxuICogQSBiYXNlIFVJIHNlcnZpY2UgZm9yIGNvbXBvbmVudHMuIFRoaXMgc2VydmljZSBhbGxvd3Mgc3ViLWNvbXBvbmVudHMgdG8gY29tbXVuaWNhdGUgdGhlIGNvbXBvbmVudHNcbiAqIHdpdGhvdXQgbWFpbnRhaW5pbmcgYSBkaXJlY3QgcmVmZXJlbmNlLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBCYXNlQ29tcG9uZW50VUlTZXJ2aWNlIHtcbiAgICAvKiogQSBkZWxldGUgcmVxdWVzdCBSWEpTIHN1YmplY3QgKi9cbiAgICBkZWxldGVSZXF1ZXN0U3ViamVjdCQ6IFN1YmplY3Q8c3RyaW5nPjtcbiAgICAvKiogQW4gZWRpdCByZXF1ZXN0IFJYSlMgc3ViamVjdCAqL1xuICAgIGVkaXRSZXF1ZXN0U3ViamVjdCQ6IFN1YmplY3Q8c3RyaW5nPjtcbiAgICAvKiogQSBjbG9uZSByZXF1ZXN0IFJYSlMgc3ViamVjdCAqL1xuICAgIGNsb25lUmVxdWVzdFN1YmplY3QkOiBTdWJqZWN0PHN0cmluZz47XG4gICAgLyoqXG4gICAgICogQnJvYWRjYXN0IGEgY2xvbmUgcmVxdWVzdFxuICAgICAqIEBwYXJhbSBpZCAtIFRoZSBJRCBvZiB0aGUgb2JqZWN0IGFzc29jaWF0ZWQgd2l0aCB0aGUgcmVxdWVzdFxuICAgICAqL1xuICAgIGNsb25lUmVxdWVzdChpZDogc3RyaW5nKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBCcm9hZGNhc3QgYSBkZWxldGUgcmVxdWVzdFxuICAgICAqIEBwYXJhbSBpZCAtIFRoZSBJRCBvZiB0aGUgb2JqZWN0IGFzc29jaWF0ZWQgd2l0aCB0aGUgcmVxdWVzdFxuICAgICAqL1xuICAgIGRlbGV0ZVJlcXVlc3QoaWQ6IHN0cmluZyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQnJvYWRjYXN0IGFuIGVkaXQgcmVxdWVzdFxuICAgICAqIEBwYXJhbSBpZCAtIFRoZSBJRCBvZiB0aGUgb2JqZWN0IGFzc29jaWF0ZWQgd2l0aCB0aGUgcmVxdWVzdFxuICAgICAqL1xuICAgIGVkaXRSZXF1ZXN0KGlkOiBzdHJpbmcpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFN1YnNjcmliZSB0byBhbiBSWEpTIHN1YmplY3RcbiAgICAgKiBAcGFyYW0gc3ViamVjdE5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgc3ViamVjdCB0byBzdWJzY3JpYmUgdG9cbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgLSBUaGUgbWV0aG9kIHRvIGNhbGxiYWNrXG4gICAgICovXG4gICAgc3Vic2NyaWJlKHN1YmplY3ROYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzdWx0OiBhbnkpID0+IFByb21pc2U8dm9pZD4gfCB2b2lkKTogdm9pZDtcbn1cbiJdfQ==