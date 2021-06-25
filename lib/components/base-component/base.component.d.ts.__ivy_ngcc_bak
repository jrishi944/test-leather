import { OnDestroy } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Subject } from 'rxjs';
/**
 * Base Leatherman component
 */
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
}
