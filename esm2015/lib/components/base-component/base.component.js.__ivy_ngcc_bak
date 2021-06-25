import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { takeUntil, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subject } from 'rxjs';
/**
 * Base Leatherman component
 */
let BaseComponent = class BaseComponent {
    // constructor
    constructor() {
        /** Boolean indicating whether the component has been initialized */
        this.isInitialized = false;
        /** Boolean indicating whether the component's data is loading */
        this.isLoading = false;
        /** An RXJS subject used to destroy subscriptions when the component is destroyed */
        this.destroySubject$ = new Subject();
    }
    /**
     * Trigger the destroy subject  when the component is destroyed
     */
    ngOnDestroy() {
        this.destroySubject$.next();
    }
    decodeURIComponent(uriComponent) {
        if (!uriComponent) {
            return uriComponent;
        }
        return decodeURIComponent(uriComponent);
    }
    encodeURIComponent(uriComponent) {
        if (!uriComponent) {
            return uriComponent;
        }
        return encodeURIComponent(uriComponent);
    }
    /**
     * Subscribe to a subject
     * @param subject$ - The subject to subscribe to
     * @param callback - The callback method to call when the subject is triggered
     * @returns Void
     */
    subscribeSubject(subject$, callback) {
        subject$.pipe(takeUntil(this.destroySubject$)).subscribe((result) => __awaiter(this, void 0, void 0, function* () {
            yield callback(result);
        }));
    }
    /**
     * Subscribe to a subject synchronously
     * @param subject$ - The subject to subscribe to
     * @param callback - The callback method to call when the subject is triggered
     * @returns Void
     */
    subscribeSubjectSync(subject$, callback) {
        subject$.pipe(takeUntil(this.destroySubject$)).subscribe(result => {
            callback(result);
        });
    }
    /**
     * Subscribe to value change events for a control
     * @param control - The control to listen to
     * @param callback - The functiion to call when the control value changes
     */
    subscribeValueChanges(control, callback) {
        control.valueChanges
            .pipe(debounceTime(400), distinctUntilChanged())
            .pipe(takeUntil(this.destroySubject$))
            .subscribe((result) => __awaiter(this, void 0, void 0, function* () {
            yield callback(result);
        }));
    }
};
BaseComponent = __decorate([
    Component({
        selector: 'lm-base-component',
        template: 'No UI Here'
    })
], BaseComponent);
export { BaseComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sZWF0aGVybWFuLWJvb3RzdHJhcC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Jhc2UtY29tcG9uZW50L2Jhc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFL0UsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQjs7R0FFRztBQUtILElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWE7SUFVeEIsY0FBYztJQUNkO1FBVkEsb0VBQW9FO1FBQzdELGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBRTdCLGlFQUFpRTtRQUMxRCxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBRXpCLG9GQUFvRjtRQUM3RSxvQkFBZSxHQUFrQixJQUFJLE9BQU8sRUFBRSxDQUFDO0lBR3RDLENBQUM7SUFFakI7O09BRUc7SUFDSSxXQUFXO1FBQ2hCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVTLGtCQUFrQixDQUFDLFlBQW9CO1FBQy9DLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDakIsT0FBTyxZQUFZLENBQUM7U0FDckI7UUFDRCxPQUFPLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFUyxrQkFBa0IsQ0FBQyxZQUFvQjtRQUMvQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ2pCLE9BQU8sWUFBWSxDQUFDO1NBQ3JCO1FBQ0QsT0FBTyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDTyxnQkFBZ0IsQ0FDeEIsUUFBb0IsRUFDcEIsUUFBK0I7UUFFL0IsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQU0sTUFBTSxFQUFDLEVBQUU7WUFDdEUsTUFBTSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekIsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNPLG9CQUFvQixDQUM1QixRQUFvQixFQUNwQixRQUErQjtRQUUvQixRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDaEUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7O09BSUc7SUFDTyxxQkFBcUIsQ0FDN0IsT0FBd0IsRUFDeEIsUUFBK0I7UUFFL0IsT0FBTyxDQUFDLFlBQVk7YUFDakIsSUFBSSxDQUNILFlBQVksQ0FBQyxHQUFHLENBQUMsRUFDakIsb0JBQW9CLEVBQUUsQ0FDdkI7YUFDQSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUNyQyxTQUFTLENBQUMsQ0FBTSxNQUFNLEVBQUMsRUFBRTtZQUN4QixNQUFNLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUEsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNGLENBQUE7QUFuRlksYUFBYTtJQUp6QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsbUJBQW1CO1FBQzdCLFFBQVEsRUFBRSxZQUFZO0tBQ3ZCLENBQUM7R0FDVyxhQUFhLENBbUZ6QjtTQW5GWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRha2VVbnRpbCwgZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBCYXNlIExlYXRoZXJtYW4gY29tcG9uZW50XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xtLWJhc2UtY29tcG9uZW50JyxcbiAgdGVtcGxhdGU6ICdObyBVSSBIZXJlJ1xufSlcbmV4cG9ydCBjbGFzcyBCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgLyoqIEJvb2xlYW4gaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBjb21wb25lbnQgaGFzIGJlZW4gaW5pdGlhbGl6ZWQgKi9cbiAgcHVibGljIGlzSW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxuICAvKiogQm9vbGVhbiBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGNvbXBvbmVudCdzIGRhdGEgaXMgbG9hZGluZyAqL1xuICBwdWJsaWMgaXNMb2FkaW5nID0gZmFsc2U7XG5cbiAgLyoqIEFuIFJYSlMgc3ViamVjdCB1c2VkIHRvIGRlc3Ryb3kgc3Vic2NyaXB0aW9ucyB3aGVuIHRoZSBjb21wb25lbnQgaXMgZGVzdHJveWVkICovXG4gIHB1YmxpYyBkZXN0cm95U3ViamVjdCQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIC8vIGNvbnN0cnVjdG9yXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgdGhlIGRlc3Ryb3kgc3ViamVjdCAgd2hlbiB0aGUgY29tcG9uZW50IGlzIGRlc3Ryb3llZFxuICAgKi9cbiAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZGVzdHJveVN1YmplY3QkLm5leHQoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBkZWNvZGVVUklDb21wb25lbnQodXJpQ29tcG9uZW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICghdXJpQ29tcG9uZW50KSB7XG4gICAgICByZXR1cm4gdXJpQ29tcG9uZW50O1xuICAgIH1cbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHVyaUNvbXBvbmVudCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZW5jb2RlVVJJQ29tcG9uZW50KHVyaUNvbXBvbmVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoIXVyaUNvbXBvbmVudCkge1xuICAgICAgcmV0dXJuIHVyaUNvbXBvbmVudDtcbiAgICB9XG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh1cmlDb21wb25lbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZSB0byBhIHN1YmplY3RcbiAgICogQHBhcmFtIHN1YmplY3QkIC0gVGhlIHN1YmplY3QgdG8gc3Vic2NyaWJlIHRvXG4gICAqIEBwYXJhbSBjYWxsYmFjayAtIFRoZSBjYWxsYmFjayBtZXRob2QgdG8gY2FsbCB3aGVuIHRoZSBzdWJqZWN0IGlzIHRyaWdnZXJlZFxuICAgKiBAcmV0dXJucyBWb2lkXG4gICAqL1xuICBwcm90ZWN0ZWQgc3Vic2NyaWJlU3ViamVjdDxUPihcbiAgICBzdWJqZWN0JDogU3ViamVjdDxUPixcbiAgICBjYWxsYmFjazogKHJlc3VsdDogYW55KSA9PiB2b2lkXG4gICkge1xuICAgIHN1YmplY3QkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveVN1YmplY3QkKSkuc3Vic2NyaWJlKGFzeW5jIHJlc3VsdCA9PiB7XG4gICAgICBhd2FpdCBjYWxsYmFjayhyZXN1bHQpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZSB0byBhIHN1YmplY3Qgc3luY2hyb25vdXNseVxuICAgKiBAcGFyYW0gc3ViamVjdCQgLSBUaGUgc3ViamVjdCB0byBzdWJzY3JpYmUgdG9cbiAgICogQHBhcmFtIGNhbGxiYWNrIC0gVGhlIGNhbGxiYWNrIG1ldGhvZCB0byBjYWxsIHdoZW4gdGhlIHN1YmplY3QgaXMgdHJpZ2dlcmVkXG4gICAqIEByZXR1cm5zIFZvaWRcbiAgICovXG4gIHByb3RlY3RlZCBzdWJzY3JpYmVTdWJqZWN0U3luYzxUPihcbiAgICBzdWJqZWN0JDogU3ViamVjdDxUPixcbiAgICBjYWxsYmFjazogKHJlc3VsdDogYW55KSA9PiB2b2lkXG4gICkge1xuICAgIHN1YmplY3QkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveVN1YmplY3QkKSkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICBjYWxsYmFjayhyZXN1bHQpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZSB0byB2YWx1ZSBjaGFuZ2UgZXZlbnRzIGZvciBhIGNvbnRyb2xcbiAgICogQHBhcmFtIGNvbnRyb2wgLSBUaGUgY29udHJvbCB0byBsaXN0ZW4gdG9cbiAgICogQHBhcmFtIGNhbGxiYWNrIC0gVGhlIGZ1bmN0aWlvbiB0byBjYWxsIHdoZW4gdGhlIGNvbnRyb2wgdmFsdWUgY2hhbmdlc1xuICAgKi9cbiAgcHJvdGVjdGVkIHN1YnNjcmliZVZhbHVlQ2hhbmdlcyhcbiAgICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsXG4gICAgY2FsbGJhY2s6IChyZXN1bHQ6IGFueSkgPT4gdm9pZFxuICApIHtcbiAgICBjb250cm9sLnZhbHVlQ2hhbmdlc1xuICAgICAgLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSg0MDApLFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgICApXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95U3ViamVjdCQpKVxuICAgICAgLnN1YnNjcmliZShhc3luYyByZXN1bHQgPT4ge1xuICAgICAgICBhd2FpdCBjYWxsYmFjayhyZXN1bHQpO1xuICAgICAgfSk7XG4gIH1cbn1cbiJdfQ==