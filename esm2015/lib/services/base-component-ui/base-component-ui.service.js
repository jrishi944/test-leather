import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * A base UI service for components. This service allows sub-components to communicate the components
 * without maintaining a direct reference.
 */
let BaseComponentUIService = class BaseComponentUIService {
    constructor() {
        /** A delete request RXJS subject */
        this.deleteRequestSubject$ = new Subject();
        /** An edit request RXJS subject */
        this.editRequestSubject$ = new Subject();
        /** A clone request RXJS subject */
        this.cloneRequestSubject$ = new Subject();
    }
    /**
     * Broadcast a clone request
     * @param id - The ID of the object associated with the request
     */
    cloneRequest(id) {
        this.cloneRequestSubject$.next(id);
    }
    /**
     * Broadcast a delete request
     * @param id - The ID of the object associated with the request
     */
    deleteRequest(id) {
        this.deleteRequestSubject$.next(id);
    }
    /**
     * Broadcast an edit request
     * @param id - The ID of the object associated with the request
     */
    editRequest(id) {
        this.editRequestSubject$.next(id);
    }
    /**
     * Subscribe to an RXJS subject
     * @param subjectName - The name of the subject to subscribe to
     * @param callback - The method to callback
     */
    subscribe(subjectName, callback) {
        this[subjectName].subscribe(callback);
    }
};
BaseComponentUIService.ɵprov = i0.ɵɵdefineInjectable({ factory: function BaseComponentUIService_Factory() { return new BaseComponentUIService(); }, token: BaseComponentUIService, providedIn: "root" });
BaseComponentUIService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], BaseComponentUIService);
export { BaseComponentUIService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1jb21wb25lbnQtdWkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xlYXRoZXJtYW4tYm9vdHN0cmFwLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2Jhc2UtY29tcG9uZW50LXVpL2Jhc2UtY29tcG9uZW50LXVpLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFFL0I7OztHQUdHO0FBSUgsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBc0I7SUFBbkM7UUFDRSxvQ0FBb0M7UUFDN0IsMEJBQXFCLEdBQUcsSUFBSSxPQUFPLEVBQVUsQ0FBQztRQUVyRCxtQ0FBbUM7UUFDNUIsd0JBQW1CLEdBQUcsSUFBSSxPQUFPLEVBQVUsQ0FBQztRQUVuRCxtQ0FBbUM7UUFDNUIseUJBQW9CLEdBQUcsSUFBSSxPQUFPLEVBQVUsQ0FBQztLQXFDckQ7SUFuQ0M7OztPQUdHO0lBQ0ksWUFBWSxDQUFDLEVBQVU7UUFDNUIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksYUFBYSxDQUFDLEVBQVU7UUFDN0IsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksV0FBVyxDQUFDLEVBQVU7UUFDM0IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLFNBQVMsQ0FDZCxXQUFtQixFQUNuQixRQUErQztRQUUvQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Q0FDRixDQUFBOztBQTdDWSxzQkFBc0I7SUFIbEMsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLHNCQUFzQixDQTZDbEM7U0E3Q1ksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIEEgYmFzZSBVSSBzZXJ2aWNlIGZvciBjb21wb25lbnRzLiBUaGlzIHNlcnZpY2UgYWxsb3dzIHN1Yi1jb21wb25lbnRzIHRvIGNvbW11bmljYXRlIHRoZSBjb21wb25lbnRzXG4gKiB3aXRob3V0IG1haW50YWluaW5nIGEgZGlyZWN0IHJlZmVyZW5jZS5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQmFzZUNvbXBvbmVudFVJU2VydmljZSB7XG4gIC8qKiBBIGRlbGV0ZSByZXF1ZXN0IFJYSlMgc3ViamVjdCAqL1xuICBwdWJsaWMgZGVsZXRlUmVxdWVzdFN1YmplY3QkID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuXG4gIC8qKiBBbiBlZGl0IHJlcXVlc3QgUlhKUyBzdWJqZWN0ICovXG4gIHB1YmxpYyBlZGl0UmVxdWVzdFN1YmplY3QkID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuXG4gIC8qKiBBIGNsb25lIHJlcXVlc3QgUlhKUyBzdWJqZWN0ICovXG4gIHB1YmxpYyBjbG9uZVJlcXVlc3RTdWJqZWN0JCA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcblxuICAvKipcbiAgICogQnJvYWRjYXN0IGEgY2xvbmUgcmVxdWVzdFxuICAgKiBAcGFyYW0gaWQgLSBUaGUgSUQgb2YgdGhlIG9iamVjdCBhc3NvY2lhdGVkIHdpdGggdGhlIHJlcXVlc3RcbiAgICovXG4gIHB1YmxpYyBjbG9uZVJlcXVlc3QoaWQ6IHN0cmluZykge1xuICAgIHRoaXMuY2xvbmVSZXF1ZXN0U3ViamVjdCQubmV4dChpZCk7XG4gIH1cblxuICAvKipcbiAgICogQnJvYWRjYXN0IGEgZGVsZXRlIHJlcXVlc3RcbiAgICogQHBhcmFtIGlkIC0gVGhlIElEIG9mIHRoZSBvYmplY3QgYXNzb2NpYXRlZCB3aXRoIHRoZSByZXF1ZXN0XG4gICAqL1xuICBwdWJsaWMgZGVsZXRlUmVxdWVzdChpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5kZWxldGVSZXF1ZXN0U3ViamVjdCQubmV4dChpZCk7XG4gIH1cblxuICAvKipcbiAgICogQnJvYWRjYXN0IGFuIGVkaXQgcmVxdWVzdFxuICAgKiBAcGFyYW0gaWQgLSBUaGUgSUQgb2YgdGhlIG9iamVjdCBhc3NvY2lhdGVkIHdpdGggdGhlIHJlcXVlc3RcbiAgICovXG4gIHB1YmxpYyBlZGl0UmVxdWVzdChpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5lZGl0UmVxdWVzdFN1YmplY3QkLm5leHQoaWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZSB0byBhbiBSWEpTIHN1YmplY3RcbiAgICogQHBhcmFtIHN1YmplY3ROYW1lIC0gVGhlIG5hbWUgb2YgdGhlIHN1YmplY3QgdG8gc3Vic2NyaWJlIHRvXG4gICAqIEBwYXJhbSBjYWxsYmFjayAtIFRoZSBtZXRob2QgdG8gY2FsbGJhY2tcbiAgICovXG4gIHB1YmxpYyBzdWJzY3JpYmUoXG4gICAgc3ViamVjdE5hbWU6IHN0cmluZyxcbiAgICBjYWxsYmFjazogKHJlc3VsdDogYW55KSA9PiBQcm9taXNlPHZvaWQ+IHwgdm9pZFxuICApIHtcbiAgICB0aGlzW3N1YmplY3ROYW1lXS5zdWJzY3JpYmUoY2FsbGJhY2spO1xuICB9XG59XG4iXX0=