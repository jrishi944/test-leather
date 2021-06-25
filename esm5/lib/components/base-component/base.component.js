import { __awaiter, __decorate, __generator } from "tslib";
import { Component } from '@angular/core';
import { takeUntil, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subject } from 'rxjs';
/**
 * Base Leatherman component
 */
var BaseComponent = /** @class */ (function () {
    // constructor
    function BaseComponent() {
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
    BaseComponent.prototype.ngOnDestroy = function () {
        this.destroySubject$.next();
    };
    BaseComponent.prototype.decodeURIComponent = function (uriComponent) {
        if (!uriComponent) {
            return uriComponent;
        }
        return decodeURIComponent(uriComponent);
    };
    BaseComponent.prototype.encodeURIComponent = function (uriComponent) {
        if (!uriComponent) {
            return uriComponent;
        }
        return encodeURIComponent(uriComponent);
    };
    /**
     * Subscribe to a subject
     * @param subject$ - The subject to subscribe to
     * @param callback - The callback method to call when the subject is triggered
     * @returns Void
     */
    BaseComponent.prototype.subscribeSubject = function (subject$, callback) {
        var _this = this;
        subject$.pipe(takeUntil(this.destroySubject$)).subscribe(function (result) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, callback(result)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    /**
     * Subscribe to a subject synchronously
     * @param subject$ - The subject to subscribe to
     * @param callback - The callback method to call when the subject is triggered
     * @returns Void
     */
    BaseComponent.prototype.subscribeSubjectSync = function (subject$, callback) {
        subject$.pipe(takeUntil(this.destroySubject$)).subscribe(function (result) {
            callback(result);
        });
    };
    /**
     * Subscribe to value change events for a control
     * @param control - The control to listen to
     * @param callback - The functiion to call when the control value changes
     */
    BaseComponent.prototype.subscribeValueChanges = function (control, callback) {
        var _this = this;
        control.valueChanges
            .pipe(debounceTime(400), distinctUntilChanged())
            .pipe(takeUntil(this.destroySubject$))
            .subscribe(function (result) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, callback(result)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    BaseComponent = __decorate([
        Component({
            selector: 'lm-base-component',
            template: 'No UI Here'
        })
    ], BaseComponent);
    return BaseComponent;
}());
export { BaseComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sZWF0aGVybWFuLWJvb3RzdHJhcC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Jhc2UtY29tcG9uZW50L2Jhc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFL0UsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQjs7R0FFRztBQUtIO0lBVUUsY0FBYztJQUNkO1FBVkEsb0VBQW9FO1FBQzdELGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBRTdCLGlFQUFpRTtRQUMxRCxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBRXpCLG9GQUFvRjtRQUM3RSxvQkFBZSxHQUFrQixJQUFJLE9BQU8sRUFBRSxDQUFDO0lBR3RDLENBQUM7SUFFakI7O09BRUc7SUFDSSxtQ0FBVyxHQUFsQjtRQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVTLDBDQUFrQixHQUE1QixVQUE2QixZQUFvQjtRQUMvQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ2pCLE9BQU8sWUFBWSxDQUFDO1NBQ3JCO1FBQ0QsT0FBTyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRVMsMENBQWtCLEdBQTVCLFVBQTZCLFlBQW9CO1FBQy9DLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDakIsT0FBTyxZQUFZLENBQUM7U0FDckI7UUFDRCxPQUFPLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNPLHdDQUFnQixHQUExQixVQUNFLFFBQW9CLEVBQ3BCLFFBQStCO1FBRmpDLGlCQU9DO1FBSEMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQU0sTUFBTTs7OzRCQUNuRSxxQkFBTSxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUE7O3dCQUF0QixTQUFzQixDQUFDOzs7O2FBQ3hCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNPLDRDQUFvQixHQUE5QixVQUNFLFFBQW9CLEVBQ3BCLFFBQStCO1FBRS9CLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDN0QsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7O09BSUc7SUFDTyw2Q0FBcUIsR0FBL0IsVUFDRSxPQUF3QixFQUN4QixRQUErQjtRQUZqQyxpQkFhQztRQVRDLE9BQU8sQ0FBQyxZQUFZO2FBQ2pCLElBQUksQ0FDSCxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQ2pCLG9CQUFvQixFQUFFLENBQ3ZCO2FBQ0EsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7YUFDckMsU0FBUyxDQUFDLFVBQU0sTUFBTTs7OzRCQUNyQixxQkFBTSxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUE7O3dCQUF0QixTQUFzQixDQUFDOzs7O2FBQ3hCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFsRlUsYUFBYTtRQUp6QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFFBQVEsRUFBRSxZQUFZO1NBQ3ZCLENBQUM7T0FDVyxhQUFhLENBbUZ6QjtJQUFELG9CQUFDO0NBQUEsQUFuRkQsSUFtRkM7U0FuRlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0YWtlVW50aWwsIGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogQmFzZSBMZWF0aGVybWFuIGNvbXBvbmVudFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsbS1iYXNlLWNvbXBvbmVudCcsXG4gIHRlbXBsYXRlOiAnTm8gVUkgSGVyZSdcbn0pXG5leHBvcnQgY2xhc3MgQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIC8qKiBCb29sZWFuIGluZGljYXRpbmcgd2hldGhlciB0aGUgY29tcG9uZW50IGhhcyBiZWVuIGluaXRpYWxpemVkICovXG4gIHB1YmxpYyBpc0luaXRpYWxpemVkID0gZmFsc2U7XG5cbiAgLyoqIEJvb2xlYW4gaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBjb21wb25lbnQncyBkYXRhIGlzIGxvYWRpbmcgKi9cbiAgcHVibGljIGlzTG9hZGluZyA9IGZhbHNlO1xuXG4gIC8qKiBBbiBSWEpTIHN1YmplY3QgdXNlZCB0byBkZXN0cm95IHN1YnNjcmlwdGlvbnMgd2hlbiB0aGUgY29tcG9uZW50IGlzIGRlc3Ryb3llZCAqL1xuICBwdWJsaWMgZGVzdHJveVN1YmplY3QkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcblxuICAvLyBjb25zdHJ1Y3RvclxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIHRoZSBkZXN0cm95IHN1YmplY3QgIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBkZXN0cm95ZWRcbiAgICovXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmRlc3Ryb3lTdWJqZWN0JC5uZXh0KCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZGVjb2RlVVJJQ29tcG9uZW50KHVyaUNvbXBvbmVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoIXVyaUNvbXBvbmVudCkge1xuICAgICAgcmV0dXJuIHVyaUNvbXBvbmVudDtcbiAgICB9XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudCh1cmlDb21wb25lbnQpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGVuY29kZVVSSUNvbXBvbmVudCh1cmlDb21wb25lbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKCF1cmlDb21wb25lbnQpIHtcbiAgICAgIHJldHVybiB1cmlDb21wb25lbnQ7XG4gICAgfVxuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodXJpQ29tcG9uZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJzY3JpYmUgdG8gYSBzdWJqZWN0XG4gICAqIEBwYXJhbSBzdWJqZWN0JCAtIFRoZSBzdWJqZWN0IHRvIHN1YnNjcmliZSB0b1xuICAgKiBAcGFyYW0gY2FsbGJhY2sgLSBUaGUgY2FsbGJhY2sgbWV0aG9kIHRvIGNhbGwgd2hlbiB0aGUgc3ViamVjdCBpcyB0cmlnZ2VyZWRcbiAgICogQHJldHVybnMgVm9pZFxuICAgKi9cbiAgcHJvdGVjdGVkIHN1YnNjcmliZVN1YmplY3Q8VD4oXG4gICAgc3ViamVjdCQ6IFN1YmplY3Q8VD4sXG4gICAgY2FsbGJhY2s6IChyZXN1bHQ6IGFueSkgPT4gdm9pZFxuICApIHtcbiAgICBzdWJqZWN0JC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3lTdWJqZWN0JCkpLnN1YnNjcmliZShhc3luYyByZXN1bHQgPT4ge1xuICAgICAgYXdhaXQgY2FsbGJhY2socmVzdWx0KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJzY3JpYmUgdG8gYSBzdWJqZWN0IHN5bmNocm9ub3VzbHlcbiAgICogQHBhcmFtIHN1YmplY3QkIC0gVGhlIHN1YmplY3QgdG8gc3Vic2NyaWJlIHRvXG4gICAqIEBwYXJhbSBjYWxsYmFjayAtIFRoZSBjYWxsYmFjayBtZXRob2QgdG8gY2FsbCB3aGVuIHRoZSBzdWJqZWN0IGlzIHRyaWdnZXJlZFxuICAgKiBAcmV0dXJucyBWb2lkXG4gICAqL1xuICBwcm90ZWN0ZWQgc3Vic2NyaWJlU3ViamVjdFN5bmM8VD4oXG4gICAgc3ViamVjdCQ6IFN1YmplY3Q8VD4sXG4gICAgY2FsbGJhY2s6IChyZXN1bHQ6IGFueSkgPT4gdm9pZFxuICApIHtcbiAgICBzdWJqZWN0JC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3lTdWJqZWN0JCkpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgY2FsbGJhY2socmVzdWx0KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJzY3JpYmUgdG8gdmFsdWUgY2hhbmdlIGV2ZW50cyBmb3IgYSBjb250cm9sXG4gICAqIEBwYXJhbSBjb250cm9sIC0gVGhlIGNvbnRyb2wgdG8gbGlzdGVuIHRvXG4gICAqIEBwYXJhbSBjYWxsYmFjayAtIFRoZSBmdW5jdGlpb24gdG8gY2FsbCB3aGVuIHRoZSBjb250cm9sIHZhbHVlIGNoYW5nZXNcbiAgICovXG4gIHByb3RlY3RlZCBzdWJzY3JpYmVWYWx1ZUNoYW5nZXMoXG4gICAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxuICAgIGNhbGxiYWNrOiAocmVzdWx0OiBhbnkpID0+IHZvaWRcbiAgKSB7XG4gICAgY29udHJvbC52YWx1ZUNoYW5nZXNcbiAgICAgIC5waXBlKFxuICAgICAgICBkZWJvdW5jZVRpbWUoNDAwKSxcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICAgKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveVN1YmplY3QkKSlcbiAgICAgIC5zdWJzY3JpYmUoYXN5bmMgcmVzdWx0ID0+IHtcbiAgICAgICAgYXdhaXQgY2FsbGJhY2socmVzdWx0KTtcbiAgICAgIH0pO1xuICB9XG59XG4iXX0=