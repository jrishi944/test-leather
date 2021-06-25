import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * A base UI service for components. This service allows sub-components to communicate the components
 * without maintaining a direct reference.
 */
import * as ɵngcc0 from '@angular/core';
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
BaseComponentUIService.ɵfac = function BaseComponentUIService_Factory(t) { return new (t || BaseComponentUIService)(); };
BaseComponentUIService.ɵprov = i0.ɵɵdefineInjectable({ factory: function BaseComponentUIService_Factory() { return new BaseComponentUIService(); }, token: BaseComponentUIService, providedIn: "root" });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BaseComponentUIService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
export { BaseComponentUIService };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1jb21wb25lbnQtdWkuc2VydmljZS5qcyIsInNvdXJjZXMiOlsibmc6L2xlYXRoZXJtYW4tYm9vdHN0cmFwL2xpYi9zZXJ2aWNlcy9iYXNlLWNvbXBvbmVudC11aS9iYXNlLWNvbXBvbmVudC11aS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUlILElBQWEsc0JBQXNCLEdBQW5DLE1BQWEsc0JBQXNCO0FBQ25DLElBREE7QUFBZ0IsUUFDZCxvQ0FBb0M7QUFDdEMsUUFBUywwQkFBcUIsR0FBRyxJQUFJLE9BQU8sRUFBVSxDQUFDO0FBQ3ZELFFBQ0UsbUNBQW1DO0FBQ3JDLFFBQVMsd0JBQW1CLEdBQUcsSUFBSSxPQUFPLEVBQVUsQ0FBQztBQUNyRCxRQUNFLG1DQUFtQztBQUNyQyxRQUFTLHlCQUFvQixHQUFHLElBQUksT0FBTyxFQUFVLENBQUM7QUFDdEQsS0FvQ0M7QUFDRCxJQXBDRTtBQUNGO0FBQ0U7QUFDRSxPQUFDO0FBQ0wsSUFBUyxZQUFZLENBQUMsRUFBVTtBQUNoQyxRQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDdkMsSUFBRSxDQUFDO0FBQ0gsSUFDRTtBQUNGO0FBQ0U7QUFDRSxPQUFDO0FBQ0wsSUFBUyxhQUFhLENBQUMsRUFBVTtBQUNqQyxRQUFJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDeEMsSUFBRSxDQUFDO0FBQ0gsSUFDRTtBQUNGO0FBQ0U7QUFDRSxPQUFDO0FBQ0wsSUFBUyxXQUFXLENBQUMsRUFBVTtBQUMvQixRQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDdEMsSUFBRSxDQUFDO0FBQ0gsSUFDRTtBQUNGO0FBQ0U7QUFDRTtBQUVKLE9BREs7QUFDTCxJQUFTLFNBQVMsQ0FDZCxXQUFtQixFQUNuQixRQUErQztBQUNoRCxRQUNDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDMUMsSUFBRSxDQUFDO0FBQ0gsQ0FBQzt5SEFBQTtBQUNEO0FBOUNhLHNCQUFzQixvQkFIbEMsVUFBVSxDQUFDLFVBQ1YsVUFBVSxFQUFFO0FBQU0sTUFDbkIsQ0FBQyxJQUNXO09BQXNCLENBNkNsQzs7O2dEQUNEO0FBQUMsU0E5Q1ksc0JBQXNCO0FBQ2xDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIEEgYmFzZSBVSSBzZXJ2aWNlIGZvciBjb21wb25lbnRzLiBUaGlzIHNlcnZpY2UgYWxsb3dzIHN1Yi1jb21wb25lbnRzIHRvIGNvbW11bmljYXRlIHRoZSBjb21wb25lbnRzXG4gKiB3aXRob3V0IG1haW50YWluaW5nIGEgZGlyZWN0IHJlZmVyZW5jZS5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQmFzZUNvbXBvbmVudFVJU2VydmljZSB7XG4gIC8qKiBBIGRlbGV0ZSByZXF1ZXN0IFJYSlMgc3ViamVjdCAqL1xuICBwdWJsaWMgZGVsZXRlUmVxdWVzdFN1YmplY3QkID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuXG4gIC8qKiBBbiBlZGl0IHJlcXVlc3QgUlhKUyBzdWJqZWN0ICovXG4gIHB1YmxpYyBlZGl0UmVxdWVzdFN1YmplY3QkID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuXG4gIC8qKiBBIGNsb25lIHJlcXVlc3QgUlhKUyBzdWJqZWN0ICovXG4gIHB1YmxpYyBjbG9uZVJlcXVlc3RTdWJqZWN0JCA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcblxuICAvKipcbiAgICogQnJvYWRjYXN0IGEgY2xvbmUgcmVxdWVzdFxuICAgKiBAcGFyYW0gaWQgLSBUaGUgSUQgb2YgdGhlIG9iamVjdCBhc3NvY2lhdGVkIHdpdGggdGhlIHJlcXVlc3RcbiAgICovXG4gIHB1YmxpYyBjbG9uZVJlcXVlc3QoaWQ6IHN0cmluZykge1xuICAgIHRoaXMuY2xvbmVSZXF1ZXN0U3ViamVjdCQubmV4dChpZCk7XG4gIH1cblxuICAvKipcbiAgICogQnJvYWRjYXN0IGEgZGVsZXRlIHJlcXVlc3RcbiAgICogQHBhcmFtIGlkIC0gVGhlIElEIG9mIHRoZSBvYmplY3QgYXNzb2NpYXRlZCB3aXRoIHRoZSByZXF1ZXN0XG4gICAqL1xuICBwdWJsaWMgZGVsZXRlUmVxdWVzdChpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5kZWxldGVSZXF1ZXN0U3ViamVjdCQubmV4dChpZCk7XG4gIH1cblxuICAvKipcbiAgICogQnJvYWRjYXN0IGFuIGVkaXQgcmVxdWVzdFxuICAgKiBAcGFyYW0gaWQgLSBUaGUgSUQgb2YgdGhlIG9iamVjdCBhc3NvY2lhdGVkIHdpdGggdGhlIHJlcXVlc3RcbiAgICovXG4gIHB1YmxpYyBlZGl0UmVxdWVzdChpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5lZGl0UmVxdWVzdFN1YmplY3QkLm5leHQoaWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZSB0byBhbiBSWEpTIHN1YmplY3RcbiAgICogQHBhcmFtIHN1YmplY3ROYW1lIC0gVGhlIG5hbWUgb2YgdGhlIHN1YmplY3QgdG8gc3Vic2NyaWJlIHRvXG4gICAqIEBwYXJhbSBjYWxsYmFjayAtIFRoZSBtZXRob2QgdG8gY2FsbGJhY2tcbiAgICovXG4gIHB1YmxpYyBzdWJzY3JpYmUoXG4gICAgc3ViamVjdE5hbWU6IHN0cmluZyxcbiAgICBjYWxsYmFjazogKHJlc3VsdDogYW55KSA9PiBQcm9taXNlPHZvaWQ+IHwgdm9pZFxuICApIHtcbiAgICB0aGlzW3N1YmplY3ROYW1lXS5zdWJzY3JpYmUoY2FsbGJhY2spO1xuICB9XG59XG4iXX0=