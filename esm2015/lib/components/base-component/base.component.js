import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { takeUntil, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subject } from 'rxjs';
/**
 * Base Leatherman component
 */
import * as ɵngcc0 from '@angular/core';
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
BaseComponent.ɵfac = function BaseComponent_Factory(t) { return new (t || BaseComponent)(); };
BaseComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: BaseComponent, selectors: [["lm-base-component"]], decls: 1, vars: 0, template: function BaseComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtext(0, "No UI Here");
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BaseComponent, [{
        type: Component,
        args: [{
                selector: 'lm-base-component',
                template: 'No UI Here'
            }]
    }], function () { return []; }, null); })();
export { BaseComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIm5nOi9sZWF0aGVybWFuLWJvb3RzdHJhcC9saWIvY29tcG9uZW50cy9iYXNlLWNvbXBvbmVudC9iYXNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRS9FLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0I7QUFDQTtBQUNBLEdBQUc7O0FBS0gsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtBQUFHLElBVTNCLGNBQWM7QUFDaEIsSUFBRTtBQUFnQixRQVZoQixvRUFBb0U7QUFDdEUsUUFBUyxrQkFBYSxHQUFHLEtBQUssQ0FBQztBQUMvQixRQUNFLGlFQUFpRTtBQUNuRSxRQUFTLGNBQVMsR0FBRyxLQUFLLENBQUM7QUFDM0IsUUFDRSxvRkFBb0Y7QUFDdEYsUUFBUyxvQkFBZSxHQUFrQixJQUFJLE9BQU8sRUFBRSxDQUFDO0FBQ3hELElBRWtCLENBQUM7QUFDbkIsSUFDRTtBQUNGO0FBQ0UsT0FBRztBQUNMLElBQVMsV0FBVztBQUNwQixRQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDaEMsSUFBRSxDQUFDO0FBQ0gsSUFDWSxrQkFBa0IsQ0FBQyxZQUFvQjtBQUFJLFFBQ25ELElBQUksQ0FBQyxZQUFZLEVBQUU7QUFDdkIsWUFBTSxPQUFPLFlBQVksQ0FBQztBQUMxQixTQUFLO0FBQ0wsUUFBSSxPQUFPLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzVDLElBQUUsQ0FBQztBQUNILElBQ1ksa0JBQWtCLENBQUMsWUFBb0I7QUFBSSxRQUNuRCxJQUFJLENBQUMsWUFBWSxFQUFFO0FBQ3ZCLFlBQU0sT0FBTyxZQUFZLENBQUM7QUFDMUIsU0FBSztBQUNMLFFBQUksT0FBTyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUM1QyxJQUFFLENBQUM7QUFDSCxJQUNFO0FBQ0Y7QUFDRTtBQUNFO0FBQ0U7QUFFSixPQURHO0FBQ0wsSUFBWSxnQkFBZ0IsQ0FDeEIsUUFBb0IsRUFDcEIsUUFBK0I7QUFDaEMsUUFDQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBTSxNQUFNLEVBQUMsRUFBRTtBQUsxRSxZQUpJLE1BQU0sUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdCLFFBQUksQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUNQLElBQUUsQ0FBQztBQUNILElBQ0U7QUFDRjtBQUNFO0FBQ0U7QUFDRTtBQUVKLE9BREc7QUFDTCxJQUFZLG9CQUFvQixDQUM1QixRQUFvQixFQUNwQixRQUErQjtBQUNoQyxRQUNDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUN0RSxZQUFNLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN2QixRQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ1AsSUFBRSxDQUFDO0FBQ0gsSUFDRTtBQUNGO0FBQ0U7QUFDRTtBQUVKLE9BREs7QUFDTCxJQUFZLHFCQUFxQixDQUM3QixPQUF3QixFQUN4QixRQUErQjtBQUNoQyxRQUNDLE9BQU8sQ0FBQyxZQUFZO0FBQ3hCLGFBQU8sSUFBSSxDQUNILFlBQVksQ0FBQyxHQUFHLENBQUMsRUFDakIsb0JBQW9CLEVBQUUsQ0FDdkI7QUFDUCxhQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQzVDLGFBQU8sU0FBUyxDQUFDLENBQU0sTUFBTSxFQUFDLEVBQUU7QUFHN0IsWUFGSyxNQUFNLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMvQixRQUFNLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDVCxJQUFFLENBQUM7QUFDSCxDQUFDLENBQUE7QUFuRlksYUFBYSxvQkFKekIsU0FBUyxDQUFDLFVBQ1QsUUFBUSxFQUFFLG1CQUFtQixVQUM3QjtLQUFRLEVBQUUsWUFBWSxNQUN2QixDQUFDLElBQ1csYUFBYSxDQW1GekI7Ozs7Ozs7OztnREFDRDtBQUFDLFNBcEZZLGFBQWE7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0YWtlVW50aWwsIGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogQmFzZSBMZWF0aGVybWFuIGNvbXBvbmVudFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsbS1iYXNlLWNvbXBvbmVudCcsXG4gIHRlbXBsYXRlOiAnTm8gVUkgSGVyZSdcbn0pXG5leHBvcnQgY2xhc3MgQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIC8qKiBCb29sZWFuIGluZGljYXRpbmcgd2hldGhlciB0aGUgY29tcG9uZW50IGhhcyBiZWVuIGluaXRpYWxpemVkICovXG4gIHB1YmxpYyBpc0luaXRpYWxpemVkID0gZmFsc2U7XG5cbiAgLyoqIEJvb2xlYW4gaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBjb21wb25lbnQncyBkYXRhIGlzIGxvYWRpbmcgKi9cbiAgcHVibGljIGlzTG9hZGluZyA9IGZhbHNlO1xuXG4gIC8qKiBBbiBSWEpTIHN1YmplY3QgdXNlZCB0byBkZXN0cm95IHN1YnNjcmlwdGlvbnMgd2hlbiB0aGUgY29tcG9uZW50IGlzIGRlc3Ryb3llZCAqL1xuICBwdWJsaWMgZGVzdHJveVN1YmplY3QkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcblxuICAvLyBjb25zdHJ1Y3RvclxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIHRoZSBkZXN0cm95IHN1YmplY3QgIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBkZXN0cm95ZWRcbiAgICovXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmRlc3Ryb3lTdWJqZWN0JC5uZXh0KCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZGVjb2RlVVJJQ29tcG9uZW50KHVyaUNvbXBvbmVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoIXVyaUNvbXBvbmVudCkge1xuICAgICAgcmV0dXJuIHVyaUNvbXBvbmVudDtcbiAgICB9XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudCh1cmlDb21wb25lbnQpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGVuY29kZVVSSUNvbXBvbmVudCh1cmlDb21wb25lbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKCF1cmlDb21wb25lbnQpIHtcbiAgICAgIHJldHVybiB1cmlDb21wb25lbnQ7XG4gICAgfVxuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodXJpQ29tcG9uZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJzY3JpYmUgdG8gYSBzdWJqZWN0XG4gICAqIEBwYXJhbSBzdWJqZWN0JCAtIFRoZSBzdWJqZWN0IHRvIHN1YnNjcmliZSB0b1xuICAgKiBAcGFyYW0gY2FsbGJhY2sgLSBUaGUgY2FsbGJhY2sgbWV0aG9kIHRvIGNhbGwgd2hlbiB0aGUgc3ViamVjdCBpcyB0cmlnZ2VyZWRcbiAgICogQHJldHVybnMgVm9pZFxuICAgKi9cbiAgcHJvdGVjdGVkIHN1YnNjcmliZVN1YmplY3Q8VD4oXG4gICAgc3ViamVjdCQ6IFN1YmplY3Q8VD4sXG4gICAgY2FsbGJhY2s6IChyZXN1bHQ6IGFueSkgPT4gdm9pZFxuICApIHtcbiAgICBzdWJqZWN0JC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3lTdWJqZWN0JCkpLnN1YnNjcmliZShhc3luYyByZXN1bHQgPT4ge1xuICAgICAgYXdhaXQgY2FsbGJhY2socmVzdWx0KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJzY3JpYmUgdG8gYSBzdWJqZWN0IHN5bmNocm9ub3VzbHlcbiAgICogQHBhcmFtIHN1YmplY3QkIC0gVGhlIHN1YmplY3QgdG8gc3Vic2NyaWJlIHRvXG4gICAqIEBwYXJhbSBjYWxsYmFjayAtIFRoZSBjYWxsYmFjayBtZXRob2QgdG8gY2FsbCB3aGVuIHRoZSBzdWJqZWN0IGlzIHRyaWdnZXJlZFxuICAgKiBAcmV0dXJucyBWb2lkXG4gICAqL1xuICBwcm90ZWN0ZWQgc3Vic2NyaWJlU3ViamVjdFN5bmM8VD4oXG4gICAgc3ViamVjdCQ6IFN1YmplY3Q8VD4sXG4gICAgY2FsbGJhY2s6IChyZXN1bHQ6IGFueSkgPT4gdm9pZFxuICApIHtcbiAgICBzdWJqZWN0JC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3lTdWJqZWN0JCkpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgY2FsbGJhY2socmVzdWx0KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJzY3JpYmUgdG8gdmFsdWUgY2hhbmdlIGV2ZW50cyBmb3IgYSBjb250cm9sXG4gICAqIEBwYXJhbSBjb250cm9sIC0gVGhlIGNvbnRyb2wgdG8gbGlzdGVuIHRvXG4gICAqIEBwYXJhbSBjYWxsYmFjayAtIFRoZSBmdW5jdGlpb24gdG8gY2FsbCB3aGVuIHRoZSBjb250cm9sIHZhbHVlIGNoYW5nZXNcbiAgICovXG4gIHByb3RlY3RlZCBzdWJzY3JpYmVWYWx1ZUNoYW5nZXMoXG4gICAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxuICAgIGNhbGxiYWNrOiAocmVzdWx0OiBhbnkpID0+IHZvaWRcbiAgKSB7XG4gICAgY29udHJvbC52YWx1ZUNoYW5nZXNcbiAgICAgIC5waXBlKFxuICAgICAgICBkZWJvdW5jZVRpbWUoNDAwKSxcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICAgKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveVN1YmplY3QkKSlcbiAgICAgIC5zdWJzY3JpYmUoYXN5bmMgcmVzdWx0ID0+IHtcbiAgICAgICAgYXdhaXQgY2FsbGJhY2socmVzdWx0KTtcbiAgICAgIH0pO1xuICB9XG59XG4iXX0=