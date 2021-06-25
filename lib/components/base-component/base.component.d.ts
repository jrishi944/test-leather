import { OnDestroy } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Subject } from 'rxjs';
/**
 * Base Leatherman component
 */
import * as ɵngcc0 from '@angular/core';
export declare class BaseComponent implements OnDestroy {
    /** Boolean indicating whether the component has been initialized */
    isInitialized: boolean;
    /** Boolean indicating whether the component's data is loading */
    isLoading: boolean;
    /** An RXJS subject used to destroy subscriptions when the component is destroyed */
    destroySubject$: Subject<void>;
    constructor();
    /**
     * Trigger the destroy subject  when the component is destroyed
     */
    ngOnDestroy(): void;
    protected decodeURIComponent(uriComponent: string): string;
    protected encodeURIComponent(uriComponent: string): string;
    /**
     * Subscribe to a subject
     * @param subject$ - The subject to subscribe to
     * @param callback - The callback method to call when the subject is triggered
     * @returns Void
     */
    protected subscribeSubject<T>(subject$: Subject<T>, callback: (result: any) => void): void;
    /**
     * Subscribe to a subject synchronously
     * @param subject$ - The subject to subscribe to
     * @param callback - The callback method to call when the subject is triggered
     * @returns Void
     */
    protected subscribeSubjectSync<T>(subject$: Subject<T>, callback: (result: any) => void): void;
    /**
     * Subscribe to value change events for a control
     * @param control - The control to listen to
     * @param callback - The functiion to call when the control value changes
     */
    protected subscribeValueChanges(control: AbstractControl, callback: (result: any) => void): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BaseComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<BaseComponent, "lm-base-component", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiYmFzZS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG4vKipcbiAqIEJhc2UgTGVhdGhlcm1hbiBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gICAgLyoqIEJvb2xlYW4gaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBjb21wb25lbnQgaGFzIGJlZW4gaW5pdGlhbGl6ZWQgKi9cbiAgICBpc0luaXRpYWxpemVkOiBib29sZWFuO1xuICAgIC8qKiBCb29sZWFuIGluZGljYXRpbmcgd2hldGhlciB0aGUgY29tcG9uZW50J3MgZGF0YSBpcyBsb2FkaW5nICovXG4gICAgaXNMb2FkaW5nOiBib29sZWFuO1xuICAgIC8qKiBBbiBSWEpTIHN1YmplY3QgdXNlZCB0byBkZXN0cm95IHN1YnNjcmlwdGlvbnMgd2hlbiB0aGUgY29tcG9uZW50IGlzIGRlc3Ryb3llZCAqL1xuICAgIGRlc3Ryb3lTdWJqZWN0JDogU3ViamVjdDx2b2lkPjtcbiAgICBjb25zdHJ1Y3RvcigpO1xuICAgIC8qKlxuICAgICAqIFRyaWdnZXIgdGhlIGRlc3Ryb3kgc3ViamVjdCAgd2hlbiB0aGUgY29tcG9uZW50IGlzIGRlc3Ryb3llZFxuICAgICAqL1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG4gICAgcHJvdGVjdGVkIGRlY29kZVVSSUNvbXBvbmVudCh1cmlDb21wb25lbnQ6IHN0cmluZyk6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgZW5jb2RlVVJJQ29tcG9uZW50KHVyaUNvbXBvbmVudDogc3RyaW5nKTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFN1YnNjcmliZSB0byBhIHN1YmplY3RcbiAgICAgKiBAcGFyYW0gc3ViamVjdCQgLSBUaGUgc3ViamVjdCB0byBzdWJzY3JpYmUgdG9cbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgLSBUaGUgY2FsbGJhY2sgbWV0aG9kIHRvIGNhbGwgd2hlbiB0aGUgc3ViamVjdCBpcyB0cmlnZ2VyZWRcbiAgICAgKiBAcmV0dXJucyBWb2lkXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHN1YnNjcmliZVN1YmplY3Q8VD4oc3ViamVjdCQ6IFN1YmplY3Q8VD4sIGNhbGxiYWNrOiAocmVzdWx0OiBhbnkpID0+IHZvaWQpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFN1YnNjcmliZSB0byBhIHN1YmplY3Qgc3luY2hyb25vdXNseVxuICAgICAqIEBwYXJhbSBzdWJqZWN0JCAtIFRoZSBzdWJqZWN0IHRvIHN1YnNjcmliZSB0b1xuICAgICAqIEBwYXJhbSBjYWxsYmFjayAtIFRoZSBjYWxsYmFjayBtZXRob2QgdG8gY2FsbCB3aGVuIHRoZSBzdWJqZWN0IGlzIHRyaWdnZXJlZFxuICAgICAqIEByZXR1cm5zIFZvaWRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgc3Vic2NyaWJlU3ViamVjdFN5bmM8VD4oc3ViamVjdCQ6IFN1YmplY3Q8VD4sIGNhbGxiYWNrOiAocmVzdWx0OiBhbnkpID0+IHZvaWQpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFN1YnNjcmliZSB0byB2YWx1ZSBjaGFuZ2UgZXZlbnRzIGZvciBhIGNvbnRyb2xcbiAgICAgKiBAcGFyYW0gY29udHJvbCAtIFRoZSBjb250cm9sIHRvIGxpc3RlbiB0b1xuICAgICAqIEBwYXJhbSBjYWxsYmFjayAtIFRoZSBmdW5jdGlpb24gdG8gY2FsbCB3aGVuIHRoZSBjb250cm9sIHZhbHVlIGNoYW5nZXNcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgc3Vic2NyaWJlVmFsdWVDaGFuZ2VzKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCwgY2FsbGJhY2s6IChyZXN1bHQ6IGFueSkgPT4gdm9pZCk6IHZvaWQ7XG59XG4iXX0=